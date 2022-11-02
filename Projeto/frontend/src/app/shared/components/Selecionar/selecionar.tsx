import "./selecionar.css";
import { ReactNode } from "react";

interface config {
  label: string;
  id: string;
  onChange: Function;
  opcoes: Array<Object>;
}
interface config2 {
  set: string;
  id: string;
  children: ReactNode;
}

export const Selecionar = ({
  label,
  id,
  onChange,
  opcoes,
}: // tamanho,
config) => {
  let opcoesTag = [];
  opcoes.forEach((elemento) => {
    opcoesTag.push(
      <option value={elemento["valor"]}>{elemento["nome"]}</option>
    );
  });

  return (
    <div className="select">
      <select
        required
        onChange={(e) => onChange(e.target.value)}
        className="inputSelectPilot"
        name={id}
        id={id}
      >
        <option></option>
        {opcoesTag}
      </select>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export const SelecionarComRetorno = ({
  set,
  id,
  children
}: config2) => {

  return (
    <div className="select">
      <select
        required
        className="inputSelectPilot"
        name=""
        id={id}
      >
        <option></option>
        {set}
      </select>
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
