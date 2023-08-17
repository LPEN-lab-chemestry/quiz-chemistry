import styles from "./About.module.css";
import Button from "../../components/button/Button";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className={styles["main-container"]}>
      <header className={styles["header"]}>
        <h1>QUIMICA</h1>
        <div className={styles["right"]}>
          <div className={styles["button-sobre"]}>
            <Button
              onClick={handleBack}
              width="small"
              height="small"
              theme="red"
              fontSize="large"
            >
              Sobre
            </Button>
          </div>
        </div>
      </header>
      <div className={styles["center-container"]}>
        <div className={styles["logo-area"]}>
          <img src={logo} alt="Imagem logo mico" />
        </div>
        <div className={styles["card"]}>
          <p>
            Responda às perguntas corretamente para avançar e conquistar níveis
            cada vez mais desafiadores. Com uma interface amigável e ilustrações
            vibrantes, nosso jogo de química proporciona uma experiência de
            aprendizado divertida e eficaz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
