import styles from "./Congratulations.module.css";
import Button from "../../components/button/Button";
import Cookie from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { urlServer } from "../../urlServer/UrlServer";

const Congratulations = () => {
  const navigate = useNavigate();
  const { updateAuthFromCookie } = useContext(AuthContext);

  const token = Cookie.get("auth_token");

  const handleLogout = () => {
    Cookie.remove("auth_token");
    Cookie.remove("user_email");
    Cookie.remove("user_id");
    updateAuthFromCookie();
    navigate("/");
  };

  const userId = Cookie.get("user_id");
  const userName = Cookie.get("user_name");

  const [score, setScore] = useState("");

  async function fetchScore() {
    const response = await fetch(`${urlServer}/users/score?userId=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.json();
    setScore(responseData.score);
  }

  useEffect(() => {
    fetchScore();
  }, []);

  return (
    <div className={styles["main-container"]}>
      <header className={styles["header"]}>
        <h1>{userName}</h1>
        <div className={styles["right"]}>
          <div className={styles["button-sobre"]}>
            <Button
              onClick={() => navigate("/sobre")}
              width="small"
              height="small"
              theme="orange"
              fontSize="large"
            >
              Sobre
            </Button>
          </div>
        </div>
      </header>
      <div className={styles["container-center"]}>
        <div className={styles["score-detail"]}>
          <h1>Parabéns, sua pontuação é de:</h1>
          {score && <h1>{score}pts</h1>}
        </div>
        <div className={styles["buttons-area"]}>
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
    </div>
  );
};

export default Congratulations;
