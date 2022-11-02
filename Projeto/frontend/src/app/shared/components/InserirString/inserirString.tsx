import {ReactNode } from "react";
import "./inserirString.css";


interface configString {
    children: ReactNode;
    emMudanca: Function;
    id: string;
  }

export const InserirString = ({children,emMudanca,id}: configString) => {
  return(
    <>
      <div className="input">
        <input
          required
          onChange={(e) => emMudanca(e.target.value)}
          className="inputPilot"
          name={id}
          id={id}
        />
        <label htmlFor={id}>{children}</label>
      </div>
    </>
  )
}