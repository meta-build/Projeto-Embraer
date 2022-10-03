import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./menu.css";

export const Menu = () => {
  const history = useNavigate();

  const handleCadastro = () => {
    history("/aircraft");
  };

    const handleCalculo = () => {
      history("/calc");
    };

  return (
    <>
      <div className="menu">
        <div onClick={handleCadastro} className="menuButton">
          <FontAwesomeIcon className="icon" icon={faPlane} />
          <button>Cadastro</button>
        </div>
        <div onClick={handleCalculo} className="menuButton">
          <FontAwesomeIcon className="icon" icon={faCalculator} />
          <button>Cálculo</button>
        </div>
      </div>
    </>
  );
};
