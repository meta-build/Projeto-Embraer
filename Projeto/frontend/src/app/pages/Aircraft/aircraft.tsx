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

// import tentativa CRUD

import { useState } from "react";
import FormDialog from "./dialog/dialog";
import CadastradorAeronave from "../../shared/services/Cadastrar/cadastrar_aeronave";
import ListarAeronaves from "../../shared/services/Resgatar/resgatar_aeronave";


export const Aircraft = (props) => {
  const history = useNavigate();

  const handleVoltar = () => {
    history("/menu");
  };

  // Tentativa de CRUD

  const [open, setOpen] = useState(false);
  const [aircraft, setAircraft] = useState('');

  const handleClickAircraft = () => {
    setOpen(true);
  }

  var nome = {
    name: aircraft
  }

  var listAircrafts = {};

  const cadastrarAeronave = (e) => {
    e.preventDefault();
    // enviar parametros
    let cadastrar = new CadastradorAeronave();
    cadastrar.cadastrar(nome);
  };

  const resgatarAeronave = () => {
    // pegar resultado
    let resgatarResultado = new ListarAeronaves();
    const retorno = resgatarResultado.resgatar();
    retorno.then((aeronaves) => {
      listAircrafts = aeronaves
    });
  };

  resgatarAeronave()

  let montarTabela = () => {

  }

  listAircrafts.map((aviao) => {
    return (<tr>
      <td>{aviao['name']}</td>
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
    </tr>)
  })

  let tabelinha = montarTabela()
  return (
    <div className="aircraftComponent">

      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        listAircraft={props.listAircraft}
        setListAircraft={props.setListAircraft}
        id={props.id}
      />

      <button type="button" className="aircraftBackButton" onClick={handleVoltar}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1 className="aircraftTitle">Aircraft Models</h1>

      <div className="inputComponent">
        <input
          onChange={(e) => {
            console.log(e.target.value)
            setAircraft(e.target.value)
          }}
          className="inputAircraft"
          type="search"
          placeholder="Aircraft Name"
        />
        <button className="aircraftInputButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="aircraftInputButton" onClick={cadastrarAeronave}>
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>

      <table>
        <tr>
          <th className="firstTh">Aircraft Name</th>
          <th className="alinhamento">Edit</th>
          <th className="alinhamento">Delete</th>
        </tr>
        {tabelinha}
      </table>
    </div>
  );
};
