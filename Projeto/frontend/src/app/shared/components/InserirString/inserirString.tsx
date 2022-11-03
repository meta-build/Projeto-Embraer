import { ButtonHTMLAttributes, ReactNode } from "react";
import "./inserirString.css";


interface configString extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  emMudanca: Function;
  id: string;
  tamanho: 'md' | 'lg';
}

export const InserirString = (props: configString) => {

  return (
    <div className={`input ${props.tamanho}`}>
      <input
        required
        onChange={(e) => props.emMudanca(e.target.value)}
        className='inserir '
        name={props.id}
        id={props.id}
      />
      <label htmlFor={props.id} className='label'>{props.children}</label>
    </div>
  )
}