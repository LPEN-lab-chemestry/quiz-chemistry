import styles from "./StartFrame.module.css";
import Button from "../../components/button/Button";
import logo from "../../assets/logo.png";
import Cookie from "js-cookie";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const StartFrame = () => {
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

  return (
    <div className={styles["main-container"]}>
      <header className={styles["header"]}>
        <h1>QUIMICA</h1>
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
        <div className={styles["logo-area"]}>
          <img src={logo} alt="Imagem logo mico" />
        </div>
        <div className={styles["buttons-area"]}>
          {token && (
            <>
              <Button
                onClick={() => navigate("/menu/themes")}
                width="large"
                height="small"
                theme="white-green"
                fontSize="large"
              >
                Começar agora
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
            </>
          )}
          {!token && (
            <>
              <Button
                onClick={() => navigate("/login")}
                width="large"
                height="small"
                theme="white-green"
                fontSize="large"
              >
                Logar
              </Button>

              <Button
                onClick={() => navigate("/register")}
                width="large"
                height="small"
                theme="orange"
                fontSize="large"
              >
                Criar uma conta
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartFrame;
