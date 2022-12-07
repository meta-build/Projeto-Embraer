/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import {
  Botao,
  Resultado,
  Selecionar,
  InserirNumero,
  BotaoVoltar,
  Text,
  SelecionarComRetorno,
} from "../../shared/components";
import "./calculo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ListarAeronaves from "../../shared/services/Resgatar/listarAeronaves";
import PesquisarAeronaveId from "../../shared/services/Resgatar/pesquisarAeronaveId";
import axios from "axios";

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
  const [Measurement, setMeasurement] = useState<number>(0);

  const [aeronavesNome, setaeronavesNome] = useState();
  const [aeronavesMotor, setaeronavesMotor] = useState();
  const [aeronavesCertification, setaeronavesCertification] = useState();
  const [aeronavesFlaps, setaeronavesFlaps] = useState();
  const [aeronavesBreak, setaeronavesBreak] = useState();
  const [aeronavesId, setaeronavesId] = useState<number>(NaN);

  const [breaks, setBreak] = useState();

  const [minWeight, setMinWeight] = useState(NaN);
  const [maxWeight, setMaxWeight] = useState(NaN);
  const [minTemp, setMinTemp] = useState(NaN);
  const [maxTemp, setMaxTemp] = useState(NaN);
  const [minSpeed, setMinSpeed] = useState(NaN);
  const [maxSpeed, setMaxSpeed] = useState(NaN);

  const [labelPeso, setlabelPeso] = useState('');
  const [labelResultado, setlabelResultado] = useState('');

  // history para volta ao menu
  const history = useNavigate();

  var params = {
    aeronavesId: aeronavesId,
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

  // let opcoes: Array<Object>;
  // let modelos = [{ nome: "Default airplane", valor: 1 }];
  // let motors = [{ nome: "Default motor", valor: 0 }];
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
    //{ nome: "One inoperating", valor: 1 },
    { nome: "All inoperating", valor: 1 },
  ];
  let airstripConditions = [
    { nome: "Dry", valor: "6 (DRY)" },
    { nome: "Wet", valor: "5 (GOOD)" },
    { nome: "Compact Snow", valor: "4 (GOOD TO MEDIUM)" },
    { nome: "Loose Snow", valor: "3 (MEDIUM)" },
    { nome: "Standing Water", valor: "2 (MEDIUM TO POOR)" },
    { nome: "Ice", valor: "1 (POOR)" },
  ];
  let iceOptions = [
    { nome: "Without Ice", valor: 0 },
    { nome: "With Ice", valor: 1 },
  ];

  let flapOptions = [
    { nome: "Flap 220", valor: 0 },
    { nome: "Flap 450", valor: 1 },
  ];

  let medidas = [
    { nome: "Imperial", valor: 0 },
    { nome: "Internacional", valor: 1 },
  ];

  const trocarLabel = (event) => {
    if (event == 0) {
      setMeasurement(0)
      setlabelResultado(' (fts):')
      setlabelPeso(' (lb)')
      setweight(Math.ceil(kgToLb(weight)));
      setMinWeight(kgToLb(minWeight));
      setMaxWeight(kgToLb(maxWeight));
    } else if (event == 1) {
      setMeasurement(1)
      setlabelResultado(' (mts):')
      setlabelPeso(' (kg)');
      setweight(Math.ceil(lbToKg(weight)));
      setMinWeight(lbToKg(minWeight));
      setMaxWeight(lbToKg(maxWeight));
    } else {
      setMeasurement(1)
      setlabelResultado('')
      setlabelPeso('')
    }
  }

  //voltar para o menu!!!!

  const handleVoltar = () => {
    history("/menu");
  };

  const lbToKg = (weight: number) => {
    return weight / 2.205
  }

  const kgToLb = (weight: number) => {
    return weight * 2.205
  }

  const converterResultado = (resultado): number => {
    if (Measurement == 0) {
      return resultado * 3.281
    }
    return resultado
  }

  async function submeterCalculo (e) {
    e.preventDefault();
    if (Measurement == 0) {
      setweight(Math.ceil(lbToKg(weight)))
    }
   let params = {
    "aeronavesId": aeronavesId,
    "wind": wind,
    "windDirection": windDirection,
    "motor": motor,
    "temp": temp,
    "slope": slope,
    "slopeDirection": slopeDirection,
    "weight": weight,
    "certification": certification,
    "airportAltitude": airportAltitude,
    "overspeed": overspeed,
    "reverser": reverser,
    "airstripCondition": airstripCondition,
    "iceBuildup": iceBuildup,
    "landingFlap": landingFlap
}
    axios.post(
     'http://localhost:3001/calc',
     params,
     {headers:{"Content-Type" : "application/json"}})
     .then(resultado => {
      setresult(converterResultado(resultado.data["result"]["result"]))})
  };

  // PEGAR MODELOS CADASTRADOS NO BANCO

  const getAeronaves = () => {
    let listarAeronaves = new ListarAeronaves();
    let retorno = listarAeronaves.resgatar();
    retorno.then((elementos) => {
      setaeronavesNome(
        elementos.map((aviao) => (
          <option key={aviao.id} value={aviao.id}>
            {aviao.nome}
          </option>
        ))
      );
    });
  };

  // DEFINIR INFORMAÇÕES A PARTIR DO MODELO PUXADO

  const definirInfo = (id: number) => {
    let getAviao = new PesquisarAeronaveId();
    getAviao.setPesquisa(`${id}`);
    let retorno = getAviao.resgatar();
    retorno.then((aviao) => {
      setaircraftModel(aviao["name"]);
      setaeronavesId(id)
      setaeronavesMotor(
        aviao["motors"].map((e) => (
          <option key={e.id} value={e.id}>
            {e.nome}
          </option>
        ))
      );
      setaeronavesCertification(
        aviao["certificacoes"].map((e) => (
          <option key={e.id} value={e.id}>
            {e.nome}
          </option>
        ))
      );
      setaeronavesFlaps(
        aviao["flaps"].map((e) => (
          <option key={e.id} value={e.id}>
            {e.nome}
          </option>
        ))
      );
      setaeronavesBreak(
        aviao["breaks"].map((e) => (
          <option key={e.id} value={e.id}>
            {e.nome}
          </option>
        ))
      );
      setMinWeight(aviao["minWeight"]);
      setMaxWeight(aviao['maxWeight']);
      setMinTemp(aviao['minTemp']);
      setMaxTemp(aviao['maxTemp']);
      setMinSpeed(aviao['minSpeed']);
      setMaxSpeed(aviao['maxSpeed']);
    });
  };

  useEffect(getAeronaves, []);
  return (
    <>
      <BotaoVoltar
        tipo="button"
        className="aircraftBackButton"
        onClick={handleVoltar}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </BotaoVoltar>

      <Text tipo="aircraftTitle">Landing Distance Calculator</Text>

      <div className="calculadora">
        <form onSubmit={submeterCalculo}>
          <div className="insercao">

            <Selecionar
              label="Measurement"
              id="medida"
              onChange={trocarLabel}
              opcoes={medidas}
              noNullOption={true}
            />

            <SelecionarComRetorno
              set={aeronavesNome}
              id="aeronavesId"
              children="Aircraft Models"
              onChange={definirInfo}
            />

            <SelecionarComRetorno
              set={aeronavesMotor}
              id="motor"
              children="Motor"
              onChange={setmotor}
            />

            <SelecionarComRetorno
              set={aeronavesCertification}
              id="certification"
              children="Certification"
              onChange={setcertification}
            />

            <SelecionarComRetorno
              set={aeronavesBreak}
              id="break"
              children="Break"
              onChange={setBreak}
            />

            <Selecionar
              label="Flap"
              id="flap"
              onChange={setlandingFlap}
              opcoes={flapOptions}
            />

            <Selecionar
              label="Ice Build Up"
              id="iceBuildup"
              onChange={seticeBuildup}
              opcoes={iceOptions}
            />

            <InserirNumero
              Children={"Airplane Weight" + labelPeso}
              min={minWeight}
              max={maxWeight}
              intervalo={1}
              id="weight"
              value={weight}
              onChange={setweight}
            />

            <InserirNumero
              Children="Airport Altitude (ft)"
              id="airportAltitude"
              min={-1600}
              max={16000}
              intervalo={1}
              onChange={setairportAltitude}
            />

            <InserirNumero
              Children="Temperature (celsius)"
              id="temp"
              min={minTemp}
              max={maxTemp}
              intervalo={1}
              onChange={settemp}
            />

            <InserirNumero
              Children="Wind (kt)"
              min={0}
              max={40}
              intervalo={1}
              id="wind"
              onChange={setwind}
            />

            <Selecionar
              label="Wind Direction"
              id="windDirection"
              opcoes={winds}
              onChange={setwindDirection}
            />

            <InserirNumero
              Children="Slope (%)"
              min={0}
              max={10}
              intervalo={0.1}
              id="slope"
              onChange={setslope}
            />

            <Selecionar
              label="Slope Angle"
              id="slopeAngle"
              onChange={setslopeDirection}
              opcoes={slopeAngles}
            />

            <Selecionar
              label="Reverser"
              id="reverser"
              onChange={setreverser}
              opcoes={reversers}
            />

            <InserirNumero
              Children="Speed (kt)"
              id="overspeed"
              min={minSpeed}
              max={maxSpeed}
              intervalo={1}
              onChange={setoverspeed}
            />

            <Selecionar
              label="Airstrip Condition"
              id="airstripCondition"
              onChange={setairstripCondition}
              opcoes={airstripConditions}
            />
          </div>
          <div className="calcBotoes">
            <Botao tipo="submit" texto="Calculate" />
            <Botao tipo="reset" texto="Reset" noClique={() => setresult(0)} />
          </div>
        </form>
        <Resultado label={labelResultado} result={result}/>
      </div>
    </>
  );
};
