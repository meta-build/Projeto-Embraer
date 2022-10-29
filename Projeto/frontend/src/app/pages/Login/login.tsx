import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BotaoComFuncao, InserirTexto } from "../../shared/components";
import { Logo } from "../../../Logo";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useNavigate();

  const handleEntrar = () => {
    history("/menu");
  };

  return (
    <div className="loginComponent">
        <Logo />
      <form>
        <InserirTexto
          id="Email"
          children="Endereço de e-mail:"
          type="email"
          value={email}
          onChange={setEmail}
        />

        <InserirTexto
          id="Senha"
          children="Sua senha:"
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
