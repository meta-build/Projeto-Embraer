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
    history("/aircrafts");
  };

  //   const handleCalculo = () => {
  //     history("/calculo");
  //   };

  return (
    <>
      <div className="menu">
        <div onClick={handleCadastro} className="menuButton">
          <FontAwesomeIcon icon={faPlane} />
          <button>Cadastro</button>
        </div>
        <div className="menuButton">
          <FontAwesomeIcon icon={faCalculator} />
          <button>Cálculo</button>
        </div>
      </div>
    </>
  );
};
