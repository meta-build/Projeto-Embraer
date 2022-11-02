import "./selecionar.css";

interface config {
  label: string;
  id: string;
  onChange: Function;
  opcoes: Array<Object>;
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

