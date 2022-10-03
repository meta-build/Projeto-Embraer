import "./aircrafts.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCirclePlus,
  faArrowLeft,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const Aircraft = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history("/menu");
  };

  return (
    <div className="aircraftComponent">
      <button type="button" className="aircraftBackButton" onClick={handleVoltar}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1 className="aircraftTitle">Aircraft Models</h1>

      <div className="inputComponent">
        <input
          className="inputAircraft"
          type="search"
          placeholder="Aircraft Name"
        />
        <button className="aircraftInputButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="aircraftInputButton">
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>

      <table>
        <tr>
          <th className="firstTh">Aircraft Name</th>
          <th className="alinhamento">Edit</th>
          <th className="alinhamento">Delete</th>
        </tr>
        <tr>
          <td>Default Model</td>
          <td className="alinhamento">
            <button className="tableButton">
              <FontAwesomeIcon icon={faPen} />
            </button>
          </td>
          <td className="alinhamento">
            <button className="tableButton">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};
