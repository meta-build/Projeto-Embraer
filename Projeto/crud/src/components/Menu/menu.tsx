import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const history = useNavigate();


  const handleCadastro = () => {
    history("/aircrafts");
  };

//   const handleCalculo = () => {
//     history("/calculo");
//   };

  return (
    <>
      <button onClick={handleCadastro}>Cadastro</button>
      <button>Calculo</button>
    </>
  );
};
