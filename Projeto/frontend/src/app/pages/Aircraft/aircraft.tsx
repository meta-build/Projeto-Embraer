import "./aircrafts.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCirclePlus,
  faArrowLeft,
  // faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CadastradorAeronave from "../../shared/services/Cadastrar/cadastrar_aeronave";
import ListarAeronaves from "../../shared/services/Resgatar/listarAeronaves";
import ExcluirAeronave from "../../shared/services/Excluir/excluir_aeronave";
import {
  BotaoAircraft,
  BotaoVoltar,
  InputSearch,
  Text,
} from "../../shared/components";

export const Aircraft = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history("/menu");
  };

  const [aircraft, setAircraft] = useState("");
  const [aeronaves, setarenoaves] = useState();

  const cadastrarAeronave = (e: any) => {
    e.preventDefault();
    let cadastrar = new CadastradorAeronave();
    cadastrar.cadastrar({ name: aircraft });
  };

  const excluirAeronave = (id: number) => {
    let excluir = new ExcluirAeronave();
    excluir.excluir({ id: id });
    console.log("excluido");
  };

  const getAeronaves = () => {
    let listarAeronaves = new ListarAeronaves();
    let retorno = listarAeronaves.resgatar();
    retorno.then((elementos) => {
      setarenoaves(
        elementos.map((aviao) => (
          <tr key={aviao.idcadastro}>
            <td>{aviao.name}</td>
            {/* <td className="alinhamento">
          <button className="tableButton">
            <FontAwesomeIcon icon={faPen} />
          </button>
        </td> */}
            <td className="alinhamento">
              <button
                className="tableButton"
                onClick={() => {
                  excluirAeronave(aviao.idcadastro);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))
      );
    });
  };

  getAeronaves();
  return (
    <div className="aircraftComponent">
      <BotaoVoltar
        tipo="button"
        className="aircraftBackButton"
        onClick={handleVoltar}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </BotaoVoltar>

      <Text tipo="aircraftTitle">Aircraft Models</Text>

      <div className="inputComponent">
        <input
          onChange={(e) => {
            setAircraft(e.target.value);
          }}
          className="inputAircraft"
          type="search"
          placeholder="Aircraft Name"
        />
        <BotaoAircraft tipo="aircraftInputButton">
          <FontAwesomeIcon icon={faSearch} />
        </BotaoAircraft>

        <BotaoAircraft tipo="aircraftInputButton" onClick={cadastrarAeronave}>
          <FontAwesomeIcon icon={faCirclePlus} />
        </BotaoAircraft>
      </div>

      <table>
        <thead>
          <tr>
            <th className="firstTh">Aircraft Name</th>
            {/* <th className="alinhamento">Edit</th> */}
            <th className="alinhamento">Delete</th>
          </tr>
        </thead>
        <tbody>{aeronaves}</tbody>
      </table>
    </div>
  );
};
