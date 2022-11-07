import "./botao.css";
import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronLeft, faChevronRight, faCircleArrowDown, faCircleArrowUp, faCirclePlus, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';

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
  tipo: 'download' | 'upload' | 'edit' | 'delete' | 'cancel' | 'confirm' | 'back' | 'next';
}

interface configUploadButton extends InputHTMLAttributes<HTMLInputElement> {
  receberArquivo: Function;
}

interface configAddButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

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

  switch(props.tipo){
    case 'download':
      icon = (<FontAwesomeIcon icon={faCircleArrowDown} className='icon'/>);
      break;
    case 'upload':
      icon = (<FontAwesomeIcon icon={faCircleArrowUp} className='icon'/>);
      break;
    case 'edit':
      icon = (<FontAwesomeIcon icon={faPenToSquare} className='icon'/>)
      break;
    case 'delete':
      icon = (<FontAwesomeIcon icon={faTrash} className='icon'/>)
      break;
    case 'cancel':
      icon = (<FontAwesomeIcon icon={faXmark} className='icon'/>)
      break;
    case 'confirm':
      icon = (<FontAwesomeIcon icon={faCheck} className='icon'/>)
      break;
    case 'back':
      icon = (<FontAwesomeIcon icon={faChevronLeft} className='icon'/>)
      break;
    case 'next':
      icon = (<FontAwesomeIcon icon={faChevronRight} className='icon'/>)
  }

  return (
    <>
      {props.tipo !== 'next' && (<button className={props.tipo} onClick={props.onClick}>
        {icon}
        {props.children}
      </button>)}
      {props.tipo === 'next' && (<button className={props.tipo} onClick={props.onClick}>
        {props.children}
        {icon}
      </button>)}
    </>
  )
}

export const UploadButton = (props: configUploadButton) => {

  return (
    <label className={`btn upload`}>
          {<FontAwesomeIcon icon={faCircleArrowUp} className='icon'/>}
          {props.children}
          <input type='file' accept="application/vnd.ms-excel" name="upload" className="inputUpload" onChange={e => props.receberArquivo(e.target.files[0])}></input>
    </label>
  )
}

export const AddButton = (props: configAddButton) => {
  return (
    <span className='addBtn' onClick={props.onClick}>
      <FontAwesomeIcon icon={faCirclePlus} className='addicon'/>
    </span>
  )
}