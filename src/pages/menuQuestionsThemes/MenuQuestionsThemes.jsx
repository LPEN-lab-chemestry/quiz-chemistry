import Button from "../../components/button/Button";
import styles from "./MenuQuestionsThemes.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Score from "../../components/score/Score";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Loading from "../../components/loading/Loading";

function MenuQuestionsThemes() {
  const navigate = useNavigate();

  const token = Cookie.get("auth_token");
  const [queryName, setQueryName] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(
      `https://quiz-quimica-deploy.vercel.app/themes/list?queryName=${queryName}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      alert("Erro ao carregar dados!");
    }

    setData(responseData);
    console.log(responseData);

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [queryName, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const selectTheme = (themeId) => {
    Cookie.set("theme_id", themeId);
    navigate("/menu/level");
  };

  return (
    <div className={styles["login-container"]}>
      {loading && <Loading />}
      <header className={styles["header"]}>
        <h1>Assuntos</h1>
        <Score />
        <div className={styles["right"]}>
          <div className={styles["button-sobre"]}>
            <Button
              width="small"
              height="small"
              theme="red"
              fontSize="large"
              onClick={() => navigate("/")}
            >
              Voltar
            </Button>
          </div>
        </div>
      </header>
      <div className={styles["logo-container"]}>
        <img src={logo} alt="Imagem logo mico" />
      </div>
      <div className={styles["list-container"]}>
        <div className={styles["searchArea"]}>
          <button onClick={() => previousPage()}>{"<"}</button>
          <label>
            <input
              placeholder="Pesquisar assunto"
              value={queryName}
              onChange={(e) => setQueryName(e.target.value)}
            />
          </label>
          <button onClick={() => nextPage()}>{">"}</button>
        </div>
        <div className={styles["list"]}>
          {data &&
            data.map((theme) => (
              <button onClick={() => selectTheme(theme.id)} key={theme.id}>
                {theme.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MenuQuestionsThemes;
