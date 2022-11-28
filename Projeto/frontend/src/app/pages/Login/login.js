import "./login.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Logo } from "../../../Logo";
import Swal from "sweetalert2";

export const Login = () => {
  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      if (response.data.ok) {
        localStorage.setItem('id',response.data.id)
        if (response.data.isAdm){
          console.log(response.data.isAdm);
          window.location = "/menu";
          return;
        }
        window.location = "/calcUsuario";
        return;
      }
        // alert(response.data.msg);
      Swal.fire({
        icon: "error",
        title: response.data.exists
          ? "Wrong Password!"
          : "User not found",
      });
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div className="loginComponent">
      <Logo />
      <div className="container">
        <Formik
          initialValues={{}}
          onSubmit={handleLogin}
          validationSchema={validationsLogin}
        >
          <Form className="login-form">
            <div className="login-form-group">
              <p>E-mail</p>
              <Field id="email" name="email" className="form-field"  placeholder="user@user.com" /> <br />
              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>

            {/*Outro campo*/}
            <div className="form-group">
              <p>Password</p>
              <Field
                type="password"
                name="password"
                className="form-field"
                placeholder="********"
              />
              <br />
              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>

            <button className="button" type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
