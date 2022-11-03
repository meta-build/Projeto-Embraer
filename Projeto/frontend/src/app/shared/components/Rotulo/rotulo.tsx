import { ButtonHTMLAttributes, ReactNode } from "react";
import "./rotulo.css";


interface configString extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  tamanho: 'sm' | 'md' | 'lg';
  rotulo: string;
}

export const Rotulo = (props: configString) => {
  return (
    <div className={`campo ${props.tamanho}`}>
      <div className={`area`}>
        <p className="rotulo">{props.rotulo}</p>
        <p className='titulo'>{props.children}</p>
      </div>
    </div>
  )
}