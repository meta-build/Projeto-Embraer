// style
import "./aircrafts.css";

// react
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// components
import { BotaoVoltar, InserirString, Text } from "../../shared/components";


// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// back-end integration
import ListarAeronaves from "../../shared/services/Resgatar/listarAeronaves";
import PesquisarAeronave from "../../shared/services/Resgatar/pesquisarAeronave";

export const AircraftsTable = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history("/menu");
  };

  const handleNovoAviao = () => {
    history("/new-aircraft");
  };

  const [aeronaves, setarenoaves] = useState();

  const handleAeronave = (id: number) => {
    history(`/aircraft-profile/${id}`)
  }

  const getAeronaves = () => {
    let listarAeronaves = new ListarAeronaves();
    let retorno = listarAeronaves.resgatar();
    retorno.then((elementos) => {
      setarenoaves(
        elementos.map((aviao) => (
          <tr key={aviao.idcadastro}>
            <div onClick={() => handleAeronave(aviao.idcadastro)} className="aircraftLink" >{aviao.name}</div>
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
            <td className="borda">
             {aviao.name}
            </td>
          </tr>)
        ))
    })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
            tamanho="lg"
          >
            <FontAwesomeIcon icon={faSearch} className='searchIcon' />
            Search an Aircraft model
          </InserirString>
        </div>
        <div className='newAircraftModel' onClick={handleNovoAviao}>
          New Aircraft model
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
