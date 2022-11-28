/* eslint-disable jsx-a11y/iframe-has-title */
// import './aircraftProfile.css'

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line
import { BotaoVoltar, Text } from "../../shared/components";

import { ErrorMessage, Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import Axios from "axios";

import PesquisarUsuarioId from "../../shared/services/Resgatar/pesquisarUsuarioId";

export const UserProfile = () => {
  const [usuario, setusuario] = useState<Object>({});
  const history = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [adm, setAdm] = useState();

  const handleOnChange = (event) => {
    setAdm(event.target.checked);
  };

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const { userId } = useParams();

  const getUserbyId = () => {
    let getUser = new PesquisarUsuarioId();
    getUser.setPesquisa(userId);
    let retorno = getUser.resgatar();
    retorno.then((usuario) => {
      setusuario(usuario);
      setNome(usuario["name"]);
      setEmail(usuario["email"]);
      setAdm(usuario["adm"]);
    });
  };

  const handleVoltar = () => {
    history("/usertable");
  };

  const handleUpdate = (values) => {
    let body = {
      userId: userId,
      nomeUsuario: nome,
      email: email,
      isAdm: adm,
    };
    if (!nome || !email) {
      Swal.fire("Error!", "Cannot contain empty fields.", "error");
      return;
    }
    if (!email.includes("@") || !email.includes(".com")) {
      Swal.fire("Error!", "Wrong e-mail.", "error");
      return;
    }
    Axios.post("http://localhost:3001/editUser", body).then((response) => {
      if (response.data.ok) {
        Swal.fire({
          icon: "success",
          title: "successful update!",
        });
        handleVoltar();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to update!",
        });
      }
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getUserbyId, []);
  return (
    <>
      <BotaoVoltar
        tipo="button"
        className="aircraftBackButton"
        onClick={handleVoltar}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </BotaoVoltar>

      <Text tipo="aircraftTitle">User {usuario["name" || ""]}:</Text>

      <div className="cadastroComponent">
        <Formik initialValues={{}} onSubmit={handleUpdate}>
          <Form className="register-form">
            <div className="register-form-group">
              <p className="pCadastro">User name</p>
              <Field
                value={nome || ""}
                onChange={handleChangeNome}
                name="nomeUsuario"
                className="form-field-user"
              />

              <ErrorMessage
                component="span"
                name="nomeUsuario"
                className="form-error-user"
              />
            </div>

            <div className="register-form-group">
              <p className="pCadastro">E-mail</p>
              <Field
                value={email || ""}
                name="email"
                onChange={handleChangeEmail}
                className="form-field-user"
                placeholder="user@user.com"
              />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error-user"
              />
            </div>

            <div className="checkadm">
              <label>Is administrator?</label>
              <input
                type="checkbox"
                id="isAdm"
                name="isAdm"
                className="check"
                checked={adm}
                onChange={handleOnChange}
              />
            </div>

            <div className="buttonContainer">
              <button className="button-user" type="submit">
                Update
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
