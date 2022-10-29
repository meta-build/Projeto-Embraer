import {ReactNode } from "react";
import "./inserirNumero.css";

interface config {
  // label: string;
  Children: ReactNode;
  onChange: Function;
  id: string;
  min: number;
  max: number;
  intervalo: number;
  // tamanho: "sm" | "md" | "gg";
}

export const InserirNumero = ({Children,onChange,id,min,max,intervalo}: config) => {
  return (
    <>
      <div className="input">
        <input
          required
          onChange={(e) => onChange(e.target.value)}
          className="inputPilot"
          name={id}
          id={id}
          type="number"
          min={min}
          max={max}
          step={intervalo}
        />
        <label htmlFor={id}>{Children}</label>
      </div>
    </>
  );
};
