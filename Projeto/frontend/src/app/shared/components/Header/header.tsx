import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <header>
      <div className="navezin">
        <img src="logo.svg" alt="Embraer" />
        {localStorage.getItem("id") ? (
          <>
            <a onClick={handleLogout} href="/login" className="logout-btn">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="logout-icon"
              />
              Logout
            </a>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};
