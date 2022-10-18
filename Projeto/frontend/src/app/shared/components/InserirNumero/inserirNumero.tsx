import "./inserirNumero.css";

interface config {
  label: string;
  onChange: Function;
  tamanho: "sm" | "md" | "gg";
  id: string;
  min: number;
  max: number;
  intervalo: number;
}

export const InserirNumero = (props: config) => {
  return (
    <>
      <input
        onChange={(e) => props.onChange(e.target.value)}
        className="inputPilot"
        name={props.id}
        id={props.tamanho}
        type="number"
        min={props.min}
        max={props.max}
        step={props.intervalo}
        placeholder={props.label}
      />
    </>
  );
};
