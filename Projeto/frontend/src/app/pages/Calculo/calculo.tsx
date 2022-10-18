import { useState } from "react";
import CadastradorParametros from "../../shared/services/Cadastrar/cadastradorParametros";
import {
  Botao,
  Resultado,
  Selecionar,
  InserirNumero,
  BotaoVoltar,
  Text,
} from "../../shared/components";
import "./calculo.css";
import ResgatarResultado from "../../shared/services/Resgatar/resgateResultado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Calculo = () => {
  const [result, setresult] = useState<number>(0);
  const [aircraftModel, setaircraftModel] = useState<number>(0);
  const [wind, setwind] = useState<number>(0);
  const [windDirection, setwindDirection] = useState<number>(0);
  const [motor, setmotor] = useState<number>(0);
  const [temp, settemp] = useState<number>(0);
  const [slope, setslope] = useState<number>(0);
  const [slopeDirection, setslopeDirection] = useState<number>(0);
  const [weight, setweight] = useState<number>(0);
  const [certification, setcertification] = useState<number>(0);
  const [airportAltitude, setairportAltitude] = useState<number>(0);
  const [overspeed, setoverspeed] = useState<number>(0);
  const [reverser, setreverser] = useState<number>(0);
  const [airstripCondition, setairstripCondition] = useState<number>(0);
  const [iceBuildup, seticeBuildup] = useState<number>(0);
  const [landingFlap, setlandingFlap] = useState<number>(0);

  // history para volta ao menu
  const history = useNavigate();

  var params = {
    aircraftModel: aircraftModel,
    wind: wind,
    windDirection: windDirection,
    motor: motor,
    temp: temp,
    slope: slope,
    slopeDirection: slopeDirection,
    weight: weight,
    certification: certification,
    airportAltitude: airportAltitude,
    overspeed: overspeed,
    reverser: reverser,
    airstripCondition: airstripCondition,
    iceBuildup: iceBuildup,
    landingFlap: landingFlap,
  };

  let modelos = [{ nome: "Default airplane", valor: 0 }];
  let motors = [{ nome: "Default motor", valor: 0 }];
  let winds = [
    { nome: "Head Wind", valor: 0 },
    { nome: "Tail Wind", valor: 1 },
  ];
  let slopeAngles = [
    { nome: "Uphill", valor: 0 },
    { nome: "Downhill", valor: 1 },
  ];
  let reversers = [
    { nome: "All operating", valor: 0 },
    { nome: "One inoperating", valor: 1 },
    { nome: "All inoperating", valor: 2 },
  ];
  let airstripConditions = [
    { nome: "Dry", valor: 6 },
    { nome: "Wet", valor: 5 },
    { nome: "Compact Snow", valor: 4 },
    { nome: "Loose Snow", valor: 3 },
    { nome: "Standing Water", valor: 2 },
    { nome: "Ice", valor: 1 },
  ];
  let iceOptions = [
    { nome: "Without Ice", valor: 0 },
    { nome: "With Ice", valor: 1 },
  ];
  let flapOptions = [
    { nome: "Flap 220", valor: 0 },
    { nome: "Flap 450", valor: 1 },
  ];
  let certifications = [{ nome: "Default Certification", valor: 0 }];

  const submeterCalculo = (e) => {
    e.preventDefault();
    // enviar parametros
    let cadastrar = new CadastradorParametros();
    cadastrar.cadastrar(params);

    // pegar resultado
    let resgatarResultado = new ResgatarResultado();
    const retorno = resgatarResultado.resgatar();
    retorno.then((resultado) => setresult(resultado["result"]));
  };

  //voltar para o menu!!!!

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

      <Text tipo="aircraftTitle">
      Landing Distance Calculator
      </Text>
      
      <div className="calculadora">
        <form onSubmit={submeterCalculo}>
          <div className="insercao">
            <Selecionar
              label="Aircraft Model"
              id="aircraftModel"
              onChange={setaircraftModel}
              tamanho="md"
              opcoes={modelos}
            />

            <Selecionar
              label="Motor"
              id="motor"
              onChange={setmotor}
              tamanho="md"
              opcoes={motors}
            />

            <InserirNumero
              label="Airplane Weight (Kg)"
              min={10000}
              max={100000}
              intervalo={1000}
              id="weight"
              tamanho="md"
              onChange={setweight}
            />

            <Selecionar
              label="Landing Flap"
              id="landingFlap"
              onChange={setlandingFlap}
              tamanho="md"
              opcoes={flapOptions}
            />

            <Selecionar
              label="Ice Build Up"
              id="iceBuildup"
              onChange={seticeBuildup}
              tamanho="md"
              opcoes={iceOptions}
            />

            <InserirNumero
              label="Overspeed (kt)"
              id="overspeed"
              tamanho="sm"
              min={0}
              max={60}
              intervalo={5}
              onChange={setoverspeed}
            />

            <Selecionar
              label="Reverser"
              id="reverser"
              onChange={setreverser}
              tamanho="sm"
              opcoes={reversers}
            />

            <Selecionar
              label="Certification"
              id="certification"
              onChange={setcertification}
              tamanho="md"
              opcoes={certifications}
            />

            <InserirNumero
              label="Airport Altitude (ft)"
              id="airportAltitude"
              min={0}
              max={16000}
              intervalo={1000}
              tamanho="md"
              onChange={setairportAltitude}
            />

            <Selecionar
              label="Airstrip Condition"
              id="airstripCondition"
              onChange={setairstripCondition}
              tamanho="md"
              opcoes={airstripConditions}
            />

            <Selecionar
              label="Slope Angle"
              id="slopeAngle"
              onChange={setslopeDirection}
              tamanho="md"
              opcoes={slopeAngles}
            />

            <InserirNumero
              label="Slope (%)"
              min={0}
              max={10}
              intervalo={0.1}
              tamanho="sm"
              id="slope"
              onChange={setslope}
            />

            <Selecionar
              label="Wind Direction"
              id="windDirection"
              tamanho="md"
              opcoes={winds}
              onChange={setwindDirection}
            />

            <InserirNumero
              label="Wind (kt)"
              min={0}
              max={40}
              intervalo={5}
              tamanho="sm"
              id="wind"
              onChange={setwind}
            />

            <InserirNumero
              label="Temperature (ºC)"
              min={-30}
              max={60}
              intervalo={5}
              tamanho="md"
              id="temp"
              onChange={settemp}
            />
          </div>
          <div className="calcBotoes">
            <Botao tipo="submit" texto="Calculate" />
            <Botao tipo="reset" texto="Reset" />
          </div>
        </form>
        <Resultado result={result} />
      </div>
    </>
  );
};
