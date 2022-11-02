// import './App.css';
// import React, { useState, useEffect } from "react";
// import Axios from "axios";

// // importação teste

// import { Aircraft } from "./app/pages"

// function App() {
//   const [values, setValues] = useState();
//   const [listCadastro, setListCadastro] = useState();


// // continuar as importações do crud, verificar o teste.js e ver como importar ele na tela.

//   const handleRegisterAeronave = () =>{
//       Axios.post("http://localhost:3001/register", {
//         name: values.name,
        
//       }).then((response) => {
//         console.log(response);
//       })
//   };

//   useEffect(() => {
//     Axios.get("http://localhost:3001/getAircraft").then((response) => {
//       setListCadastro(response.data);
//     });
//   }, []);

//   const handleChangeValues = (value) => {
//     setValues((prevValues) => ({
//       ...prevValues,
//       [value.target.name]: value.target.value,
//     }));
//   };


//   return (
//     <div className='app--container'>
//       <div className='register--container'>
//         <h1 className='register--title'>Cadastro Aeronave</h1>

//         <input 
//           type = "text"
//           name = "name"
//           placeholder="Model"
//           className="register--input"
//           onChange={handleChangeValues}
//         />

//         <button onClick = {handleRegisterAeronave} className = "register--button"
//         >Cadastrar
//         </button>
//       </div>

//       {typeof listCadastro !=="undefined" && listCadastro.map((value) => {
//         return (
//           <Aircraft
//             key={value.id} 
//             listAircraft = {listCadastro} 
//             setListAicraft ={setListCadastro} 
//             id = {value.idcadastro}
//             name = {value.name}
          
//           />
//         );
//       })}

//     </div>
//   );
// }

// export default App;
