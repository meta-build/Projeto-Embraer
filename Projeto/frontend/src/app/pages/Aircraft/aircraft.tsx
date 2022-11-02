import "./aircrafts.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ListarAeronaves from "../../shared/services/Resgatar/listarAeronaves";
import {
  BotaoVoltar,
  InserirString,
  // InputSearch,
  Text,
} from "../../shared/components";
import PesquisarAeronave from "../../shared/services/Resgatar/pesquisarAeronave";

export const Aircraft = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history("/menu");
  };

  
  
  // const [aircraft, setAircraft] = useState("");
  const [aeronaves, setarenoaves] = useState();
  // const excluirAeronave = (id: number) => {
    //   let excluir = new ExcluirAeronave();
    //   excluir.excluir({ id: id });
    //   console.log("excluido");
    // };
    
    const getAeronaves = () => {
    let listarAeronaves = new ListarAeronaves();
    let retorno = listarAeronaves.resgatar();
    retorno.then((elementos) => {
      setarenoaves(
        elementos.map((aviao) => (
          <tr key={aviao.idcadastro}>
            <td>{aviao.name}</td>
          </tr>
        ))
      );
    });
  };
  
  const searchAeronaves = (nome: string) => {
    let pesquisarAeronave = new PesquisarAeronave();
    pesquisarAeronave.setPesquisa(nome);
    let retorno = pesquisarAeronave.resgatar();
    retorno.then((avioes) => {
      setarenoaves(
        avioes.map((aviao) => (
          <tr key={aviao.idcadastro}>
          <td>{aviao.name}</td>
        </tr>)
      ))
    })
  }
  
  useEffect(getAeronaves, [])
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
        <div className="searchArea">
          <InserirString
            emMudanca={searchAeronaves}
            id='search'
          >
            <FontAwesomeIcon icon={faSearch} className='searchIcon' />
            Search an Aircraft model
          </InserirString>
        </div>
        <div>
          <a href='google.com' className='newAircraftModel'>New Aircraft model</a>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th className="firstTh">Aircraft Name</th>
          </tr>
        </thead>
        <tbody>{aeronaves}</tbody>
      </table>
    </div>
  );
};
