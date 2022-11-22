import { ButtonHTMLAttributes, ReactNode } from "react";
import "./inserirString.css";


interface configString extends ButtonHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  emMudanca: Function;
  id: string;
  tamanho: 'md' | 'md2' | 'lg';
  status?: 'normal' | 'erro'
}

export const InserirString = (props: configString) => {
  return (
    <div className={`input ${props.tamanho}`}>
      <input
        required
        onChange={(e) => props.emMudanca(e.target.value)}
        className={`inserir ${props.status}`}
        name={props.id}
        id={props.id}
        value={props.value}
      />
      <label htmlFor={props.id} className={`label ${props.status}`}>{props.children}</label>
    </div>
  )
}

export const InserirNumber = (props: configString) => {
  return (
    <div className={`input ${props.tamanho}`}>
      <input
        required
        type='number'
        onChange={(e) => props.emMudanca(e.target.value)}
        className={`inserir ${props.status}`}
        name={props.id}
        id={props.id}
        value={props.value}
      />
      <label htmlFor={props.id} className={`label number ${props.status}`}>{props.children}</label>
    </div>
  )
}