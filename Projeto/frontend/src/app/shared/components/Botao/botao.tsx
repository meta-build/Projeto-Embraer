import "./botao.css";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown, faCircleArrowUp, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

interface configBotao {
  tipo: "submit" | "reset";
  texto: string;
}
interface configBotaoComFuncao extends ButtonHTMLAttributes<HTMLButtonElement> {
  tipo: "submit";
  children: ReactNode;
}
interface configBotaoVoltar extends ButtonHTMLAttributes<HTMLButtonElement> {
  tipo: "button";
  children: ReactNode;
}
interface configBotaoComIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  tipo: "aircraftInputButton";
  children: ReactNode;
}

interface configDownloadButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  tipo: 'download' | 'upload' | 'edit' | 'delete';
  children: ReactNode;
}

export const Botao = (props: configBotao) => {
  let classe = () => {
    // eslint-disable-next-line eqeqeq
    if (props.tipo == "submit") {
      return "botao azul";
    } else {
      return "botao cinza";
    }
  };

  return (
    <>
      <button type={props.tipo} className={classe()}>
        {props.texto}
      </button>
    </>
  );
};

export const BotaoComFuncao = ({ tipo, children, ...props }: configBotaoComFuncao) => {
  let classe = () => {
    // eslint-disable-next-line eqeqeq
    if (tipo == "submit") {
      return "enterButton";
    } else {
      return "botao vermelho";
    }
  };

  return (
    <>
      <button type={props.type} onClick={props.onClick}  className={classe()}>
        {children}
      </button>
    </>
  );
};

export const BotaoVoltar = ({ tipo,children, ...props }: configBotaoVoltar) => {
  let classe = () => {
    // eslint-disable-next-line eqeqeq
    if (tipo == "button") {
      return "aircraftBackButton";
    } else {
      return "botao vermelho";
    }
  };

  return (
    <>
      <button type={props.type} onClick={props.onClick}  className={classe()}>
        {children}
      </button>
    </>
  );
};

export const BotaoAircraft = ({ tipo, children, ...props }: configBotaoComIcon) => {
  let classe = () => {
    // eslint-disable-next-line eqeqeq
    if (tipo == "aircraftInputButton") {
      return "aircraftInputButton";
    } else {
      return "botao vermelho";
    }
  };

  return (
    <>
      <button type={props.type} onClick={props.onClick}  className={classe()}>
        {children}
      </button>
    </>
  );
};

export const FileButton = (props: configDownloadButton) => {

  let icon;

  if (props.tipo === 'download') {
    icon = (<FontAwesomeIcon icon={faCircleArrowDown} className='icon'/>);
  } else if (props.tipo === 'upload') {
    icon = (<FontAwesomeIcon icon={faCircleArrowUp} className='icon'/>);
  } else if (props.tipo === 'edit') {
    icon = (<FontAwesomeIcon icon={faPenToSquare} className='icon'/>)
  } else {
    icon = (<FontAwesomeIcon icon={faTrash} className='icon'/>)
  }

  return (
    <>
      <button className={props.tipo} onClick={props.onClick}>
        {icon}
        {props.children}
      </button>
    </>
  )
}