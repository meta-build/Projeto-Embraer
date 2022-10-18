import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BotaoComFuncao, InserirTexto } from "../../shared/components";

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
        <InserirTexto
          children="Email"
          type="email"
          value={email}
          onChange={setEmail}
        />

        <InserirTexto
          children="Senha"
          type="password"
          value={senha}
          onChange={setSenha}
        />

        <BotaoComFuncao type="submit" onClick={handleEntrar} tipo="submit">
          Enter
        </BotaoComFuncao>
      </form>
    </div>
  );
};
