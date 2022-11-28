// style
import "./user.css";

// react
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// components
import { BotaoVoltar, InserirString, Text } from "../../shared/components";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowLeft,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

// back-end integration
import ListarUsuarios from "../../shared/services/Resgatar/listarUsuarios";
import PesquisarUsuario from "../../shared/services/Resgatar/pesquisarUsuario";
import Swal from "sweetalert2";
import Axios from "axios";

export const UserTable = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history("/menu");
  };

  const handleFicar = () => {
    history("/usertable");
  };

  const [usuario, setusuario] = useState();

  const getUsuarios = () => {
    let listarUsuario = new ListarUsuarios();
    let retorno = listarUsuario.resgatar();
    retorno.then((elementos) => {
      setusuario(
        elementos.map((usuario) => (
          <tr key={usuario.idusuario}>
            <td>{usuario.nomeUsuario}</td>
            <td>{usuario.isAdm == 1 ? "yes" : "no"}</td>
            <td>{usuario.email}</td>
            <td>
              <div
                onClick={() => handleAeronave(usuario.idusuario)}
                className="aircraftLink"
              >
                <FontAwesomeIcon icon={faPen} />
              </div>
            </td>
            <td>
              <div
                onClick={() => handleDelete(usuario.idusuario)}
                className="aircraftLink"
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </td>
          </tr>
        ))
      );
    });
  };

  const handleAeronave = (id: number) => {
    history(`/userProfile/${id}`);
  };

  const handleDelete = (id:number) => {
    if (localStorage.getItem('id')){
      if (localStorage.getItem('id') == id + '') {
        Swal.fire({
          icon: "error",
          title: "You cannot delete yourself!",
        });
        return
      }
    }
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let body = {
          userId: id
        }
        Axios.post("http://localhost:3001/deleteUser",body).then((response) => {
          if (response.data.ok) {
            Swal.fire({
              icon: "success",
              title: "successful deleted!",
            });
            window.location.reload();
          } else {
            Swal.fire({
              icon: "error",
              title: "Failed to delete!",
            });
          }
        });
      }
    })
  }

  const searchUsuarios = (nomeUsuario: string) => {
    let pesquisarUsuario = new PesquisarUsuario();
    pesquisarUsuario.setPesquisa(nomeUsuario);
    let retorno = pesquisarUsuario.resgatar();
    retorno.then((usuarios) => {
      setusuario(
        usuarios.map((usuario) => (
          <tr key={usuario.idusuario}>
            <td>{usuario.nomeUsuario}</td>
            <td>{usuario.isAdm == 1 ? "yes" : "no"}</td>
            <td>{usuario.email}</td>
            <td>
              <div
                onClick={() => handleAeronave(usuario.idusuario)}
                className="aircraftLink"
              >
                <FontAwesomeIcon icon={faPen} />
              </div>
            </td>
            <td>
              <div
                onClick={() => handleDelete(usuario.idusuario)}
                className="aircraftLink"
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </td>
          </tr>
        ))
      );
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getUsuarios, []);
  return (
    <div className="aircraftComponent">
      <BotaoVoltar
        tipo="button"
        className="aircraftBackButton"
        onClick={handleVoltar}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </BotaoVoltar>

      <Text tipo="aircraftTitle">Users</Text>

      <div className="inputComponent">
        <div className="searchArea">
          <InserirString emMudanca={searchUsuarios} id="search" tamanho="lg">
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            Search an User
          </InserirString>
        </div>
      </div>

      <table className="tabela">
        <thead>
          <tr>
            <th className="brand">Name</th>
            <th>Adm</th>
            <th>E-mail</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{usuario}</tbody>
      </table>
    </div>
  );
};
