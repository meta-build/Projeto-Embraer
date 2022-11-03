import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

  return (
    <header>
      <div className="navezin">
        <img src='./logo.svg' alt='Embraer'/>
        <a href='/login' className='logout-btn'>
          <FontAwesomeIcon icon={faRightFromBracket} className="logout-icon"/>
          Logout
        </a>
      </div>
    </header>
  );
};
