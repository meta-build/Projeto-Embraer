import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faPlane,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import "./menu.css";

export const Menu = () => {
  const history = useNavigate();

  const handleCadastro = () => {
    history("/aircrafts-table");
  };

    const handleCalculo = () => {
      history("/calc");
    };

    const handleCadastroUsuario = () => {
      history("/cadastroUsuario");
    }

  return (
    <>
      <div className="menu">
        <div onClick={handleCadastro} className="menuButton">
          <FontAwesomeIcon className="icon" icon={faPlane} />
          <button>Aircrafts</button>
        </div>
        <div onClick={handleCalculo} className="menuButton">
          <FontAwesomeIcon className="icon" icon={faCalculator} />
          <button>Calculator</button>
        </div>
        <div onClick={handleCadastroUsuario} className="menuButton">
          <FontAwesomeIcon className="icon" icon={faUser} />
          <button>Users</button>
        </div>
      </div>
    </>
  );
};
