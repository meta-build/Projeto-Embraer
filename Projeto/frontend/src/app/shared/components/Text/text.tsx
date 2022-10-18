import "./text.css";

import { HTMLAttributes, ReactNode } from "react";

interface config extends HTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  tipo: string;
}

export const Text = ({tipo, children, ...props}: config) => {
    let classe = () => {
        // eslint-disable-next-line eqeqeq
        if (tipo == "aircraftTitle") {
          return "aircraftTitle";
        } else {
          return "botao vermelho";
        }
      };
  return (
    <>
      <h1 className={classe()}>{children}</h1>
    </>
  );
};