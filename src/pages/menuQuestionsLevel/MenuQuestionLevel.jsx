import Button from "../../components/button/Button";
import styles from "./MenuQuestionLevel.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Score from "../../components/score/Score";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Loading from "../../components/loading/Loading";

function MenuQuestionsLevel() {
  const navigate = useNavigate();

  const token = Cookie.get("auth_token");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(
      `https://quiz-quimica-deploy.vercel.app/levels/list?queryName=`,
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
  }, []);

  const selectLevel = (levelId) => {
    Cookie.set("level_id", levelId);
    navigate("/quiz");
  };

  return (
    <div className={styles["login-container"]}>
      {loading && <Loading />}
      <header className={styles["header"]}>
        <h1>Dificuldade</h1>
        <Score />
        <div className={styles["right"]}>
          <div className={styles["button-sobre"]}>
            <Button
              width="small"
              height="small"
              theme="red"
              fontSize="large"
              onClick={() => navigate("/menu/themes")}
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
        <div className={styles["list"]}>
          <h2>Selecione um nível:</h2>
          {data &&
            data.map((level) => (
              <button onClick={() => selectLevel(level.id)} key={level.id}>
                {level.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MenuQuestionsLevel;
