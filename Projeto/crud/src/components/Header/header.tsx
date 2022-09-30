import "../../App.css";
import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

  return (
    <header>
      <div className="navezin">
        <img src="logo.png" alt="Logotipo da empresa Embraer" />
        <h3 className="meuH3">Operational Landing Distance</h3>

        <div className="logout">
          <button type="button" className="exitButton">
            <a href="/login">
            <FontAwesomeIcon icon={faRightFromBracket} />
            </a>
          </button>
            <p>Logout</p>
        </div>
      </div>
    </header>
  );
};
