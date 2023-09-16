import Button from "../../components/button/Button";
import styles from "./Quiz.module.css";
import { useNavigate } from "react-router-dom";
import Score from "../../components/score/Score";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Loading from "../../components/loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Quiz() {
  const navigate = useNavigate();
  const { updateAuthFromCookie } = useContext(AuthContext);

  const token = Cookie.get("auth_token");
  const userId = Cookie.get("user_id");
  const levelId = Cookie.get("level_id");
  const themeId = Cookie.get("theme_id");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(
      `https://quiz-quimica-deploy.vercel.app/questions/generate?levelId=${levelId}&themeId=${themeId}`,
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

  async function verifyResponse(option) {
    setLoading(true);
    setOptionSelected(option);
    const response = await fetch(
      `https://quiz-quimica-deploy.vercel.app/questions/verify?questionId=${data.id}&optionSelected=${option}&userId=${userId}`,
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
      alert("Erro ao verificar resposta!");
    }

    console.log(responseData);

    if (responseData === "Resposta correta") {
      alert("Você acertou!");
      navigate("/congratulations");
    }

    setError(true);

    setLoading(false);
  }

  const handleLogout = () => {
    Cookie.remove("auth_token");
    Cookie.remove("user_email");
    Cookie.remove("user_id");
    updateAuthFromCookie();
    navigate("/");
  };

  return (
    <div className={styles["login-container"]}>
      {loading && <Loading />}
      <header className={styles["header"]}>
        <h1>Quiz</h1>
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
      <div className={styles["quiz-container"]}>
        {data && !error && (
          <div className={styles["quiz"]}>
            <h2>{data.description}</h2>
            <button onClick={() => verifyResponse("optionA")}>
              {data.optionA}
            </button>
            <button onClick={() => verifyResponse("optionB")}>
              {data.optionB}
            </button>
            <button onClick={() => verifyResponse("optionC")}>
              {data.optionC}
            </button>
            <button onClick={() => verifyResponse("optionD")}>
              {data.optionD}
            </button>
            <button onClick={() => verifyResponse("optionE")}>
              {data.optionE}
            </button>
          </div>
        )}
        {data && error && (
          <>
            <div className={styles["quiz-response"]}>
              <h2>{data.description}</h2>
              <span>Resposta correta:</span>
              <button className={styles["correct-response"]}>
                {data.responseQuestion}
              </button>
              <span>Resposta selecionada:</span>
              <button className={styles["response-selected"]}>
                {data[`${optionSelected}`]}
              </button>
            </div>
            <div className={styles["options-menu"]}>
              <div className={styles["buttons-area"]}>
                <h2>Selecione uma opção:</h2>
                <Button
                  onClick={() => navigate("/menu/themes")}
                  width="large"
                  height="small"
                  theme="white-green"
                  fontSize="large"
                >
                  Jogar novamente
                </Button>
                <Button
                  onClick={() => handleLogout()}
                  width="large"
                  height="small"
                  theme="red"
                  fontSize="large"
                >
                  Sair
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
