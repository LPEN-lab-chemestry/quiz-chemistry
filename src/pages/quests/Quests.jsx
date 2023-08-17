import Button from "../../components/button/Button";
import styles from "./Quests.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Quests = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/conta");
  };

  const handleSobre = () => {
    navigate("/sobre");
  };

  const handleTelaInicial = () => {
    navigate("/");
  };

  const handlePerguntaFacil = () => {
    navigate("/perguntaFacil");
  };
  const handlePerguntaMedio = () => {
    navigate("/perguntaMedio");
  };
  const handlePerguntaDificil = () => {
    navigate("/perguntaDificil");
  };

  return (
    <div className={styles.quests}>
      <div className={styles.header}>
        <h1 className={styles.title}>Modos</h1>

        <div className={styles.nav}>
          <Button
            width="medium"
            height="small"
            theme="white-green"
            fontSize="medium"
            onClick={handleLogin}
          >
            Criar Conta
          </Button>
          <Button
            width="medium"
            height="small"
            theme="white-green"
            fontSize="medium"
            onClick={handleTelaInicial}
          >
            Tela Inicial
          </Button>
          <Button
            width="medium"
            height="small"
            theme="white-green"
            fontSize="medium"
            onClick={handleSobre}
          >
            Sobre
          </Button>
        </div>
      </div>

      <div className={styles.body}>
        <img
          className={styles.image}
          width="140px"
          src={logo}
          alt="Imagem logo mico"
        />

        <div className={styles.table}>
          <div className={styles.tr}>
            <div className={styles.td}>
              <Button
                width="small"
                height="medium"
                theme="green"
                fontSize="large"
                onClick={handlePerguntaFacil}
              >
                Fácil
              </Button>
            </div>
            <div className={styles.td}>
              <p className={styles.seta}>➜</p>
            </div>
            <div className={styles.td}>
              <p>Perguntas sobre X</p>
            </div>
          </div>

          <div className={styles.tr}>
            <div className={styles.td}>
              <Button
                width="small"
                height="medium"
                theme="orange"
                fontSize="large"
                onClick={handlePerguntaMedio}
              >
                Médio
              </Button>
            </div>
            <div className={styles.td}>
              <p className={styles.seta}>➜</p>
            </div>
            <div className={styles.td}>
              <p>Perguntas sobre Y</p>
            </div>
          </div>

          <div className={styles.tr}>
            <div className={styles.td}>
              <Button
                width="small"
                height="medium"
                theme="red"
                fontSize="large"
                onClick={handlePerguntaDificil}
              >
                Difícil
              </Button>
            </div>
            <div className={styles.td}>
              <p className={styles.seta}>➜</p>
            </div>
            <div className={styles.td}>
              <p>Perguntas sobre Z</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;
