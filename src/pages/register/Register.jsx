import Button from "../../components/button/Button";
import styles from "./Register.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import { urlServer } from "../../urlServer/UrlServer";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit() {
    if (data.confirmPassword !== data.password) {
      setErrorMessage("A senha e confirmação não batem.");
      return;
    }

    setErrorMessage("");
    setLoading(true);
    const response = await fetch(`${urlServer}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setErrorMessage("Email ou senha inválidos!");
      setLoading(false);
      return;
    }

    const responseData = await response.json();

    alert(
      `Bem vindo, ${responseData.name}. Seu cadastro realizado com sucesso!`
    );

    setLoading(false);

    navigate("/login");
  }

  return (
    <div className={styles["login-container"]}>
      {loading && <Loading />}
      <header className={styles["header"]}>
        <h1>Cadastro</h1>
        <div className={styles["right"]}>
          <div className={styles["button-sobre"]}>
            <Button
              width="small"
              height="small"
              theme="orange"
              fontSize="large"
              onClick={() => navigate("/")}
            >
              Sobre
            </Button>
          </div>
        </div>
      </header>
      <div className={styles["logo-container"]}>
        <img src={logo} alt="Imagem logo mico" />
      </div>
      <div className={styles["form"]}>
        <div className={styles["inputslogin"]}>
          <label>
            <input
              type="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Nome"
            />
          </label>
          <label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Email"
            />
          </label>
          <label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Senha"
            />
          </label>
          <label>
            <input
              type="password"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
              placeholder="Confirmar senha"
            />
          </label>
        </div>
        <Button
          onClick={handleSubmit}
          width="small"
          height="small"
          theme="white-green"
          fontSize="large"
        >
          Confirmar
        </Button>
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}

export default Register;
