import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useNavigate();

  const handleEntrar = () => {
    history("/menu");
  };

  return (
    <div className="loginComponent">
      <form>
        <label>
          <span>Email:</span>
          <input
            className="inputLogin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Password:</span>
          <input
            className="inputLogin"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
          />
        </label>

        <button className="enterButton" type="button" onClick={handleEntrar}>
          Enter
        </button>
      </form>
    </div>
  );
};
