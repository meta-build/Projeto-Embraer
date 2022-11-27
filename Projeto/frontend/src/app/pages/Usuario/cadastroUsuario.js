import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import "./cadastroUsuario.css";

import Swal from "sweetalert2";
import { BotaoVoltar, Text } from "../../shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CadastroUsuario = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/registro", {
      nomeUsuario: values.nomeUsuario,
      isAdm: isChecked,
      email: values.email,
      password: values.password,
    }).then((response) => {
      if (response.data.ok) {
        Swal.fire({
          icon: "success",
          title: "successful registration!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "E-mail already registered!",
        });
      }
    });
  };

  const validationsRegister = yup.object().shape({
    nomeUsuario: yup.string().required("Name is required"),
    email: yup.string().email("Invalid e-mail").required("E-mail is required"),
    password: yup
      .string()
      .min(8, "Password must contain at least 8 characters")
      .required("Password is required"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "The passwords are different")
      .required("Password confirmation is required"),
  });

  const history = useNavigate();

  const handleVoltar = () => {
    history("/menu");
  };

  return (
    <>
      <BotaoVoltar
        tipo="button"
        className="aircraftBackButton"
        onClick={handleVoltar}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </BotaoVoltar>

      <Text tipo="aircraftTitle">User registration</Text>
      <div className="cadastroComponent">
        <Formik
          initialValues={{}}
          onSubmit={handleRegister}
          validationSchema={validationsRegister}
        >
          <Form className="register-form">
            <div className="register-form-group">
              <p className="pCadastro">User name</p>
              <Field name="nomeUsuario" className="form-field-user" />

              <ErrorMessage
                component="span"
                name="nomeUsuario"
                className="form-error-user"
              />
            </div>

            <div className="register-form-group">
              <p className="pCadastro">E-mail</p>
              <Field name="email" className="form-field-user" />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error-user"
              />
            </div>

            <div className="form-group">
              <p className="pCadastro">Password</p>
              <Field
                type="password"
                name="password"
                className="form-field-user"
              />

              <ErrorMessage
                component="span"
                name="password"
                className="form-error-user"
              />
            </div>

            <div className="form-group">
              <p className="pCadastro">Confirm Password</p>
              <Field
                type="password"
                name="confirmation"
                className="form-field-user"
              />

              <ErrorMessage
                component="span"
                name="confirmation"
                className="form-error-user"
              />
            </div>

            <div className="checkadm">
              <label for="isAdm">Is administrator?</label>
              <input
                type="checkbox"
                id="isAdm"
                name="isAdm"
                value={false}
                className="check"
                checked={isChecked}
                onChange={handleOnChange}
              />
            </div>

            <div className="buttonContainer">
              <button className="button-user" type="submit">
                Cadastrar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
