import Button from "../../components/button/Button";
import styles from "./Login.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Cookie from "js-cookie";
import Loading from "../../components/loading/Loading";
import { AuthContext } from "../../context/AuthContext";
import { urlServer } from "../../urlServer/UrlServer";

function Login() {
  const navigate = useNavigate();
  const { updateAuthFromCookie } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit() {
    setErrorMessage("");
    setLoading(true);
    const response = await fetch(`${urlServer}/users/auth`, {
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
    console.log(responseData);

    Cookie.set("auth_token", responseData.token);
    Cookie.set("user_name", responseData.name);
    Cookie.set("user_email", responseData.email);
    Cookie.set("user_id", responseData.id);

    setLoading(false);

    updateAuthFromCookie();
    navigate("/menu/themes");
  }

  return (
    <div className={styles["login-container"]}>
      {loading && <Loading />}
      <header className={styles["header"]}>
        <h1>Login</h1>
        <div className={styles["right"]}>
          <div className={styles["button-sobre"]}>
            <Button
              width="small"
              height="small"
              theme="orange"
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
      <div className={styles["form"]}>
        <div className={styles["inputslogin"]}>
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
        </div>
        <Button
          onClick={handleSubmit}
          width="small"
          height="small"
          theme="white-green"
          fontSize="large"
        >
          Logar
        </Button>
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}

export default Login;
