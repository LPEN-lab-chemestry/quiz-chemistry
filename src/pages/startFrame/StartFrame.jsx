import styles from "./StartFrame.module.css";
import Button from "../../components/button/Button";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router-dom";

const StartFrame = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["main-container"]}>
      <header className={styles["header"]}>
        <h1>QUIMICA</h1>
        <div className={styles["right"]}>
          <div className={styles["button-sobre"]}>
            <Button
              onClick={()=>navigate("/sobre")}
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
          <Button
            onClick={()=>navigate("/conta")}
            width="large"
            height="small"
            theme="white-green"
            fontSize="large"
          >
            Começar agora
          </Button>
          <Button
            onClick={()=>navigate("/register")}
            width="large"
            height="small"
            theme="orange"
            fontSize="large"
          >
            Criar uma conta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartFrame;
