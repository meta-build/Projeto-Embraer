/* eslint-disable jsx-a11y/iframe-has-title */
import './newAircraft.css'

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

import { AddButton, BotaoVoltar, FileButton, InserirNumber, InserirString, ListaEditavel, Painel, Text, UploadButton } from "../../shared/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BaixarTabela from '../../shared/services/Resgatar/baixarTabela';
import axios from 'axios';
import PesquisarAeronaveId from '../../shared/services/Resgatar/pesquisarAeronaveId';
import ExcluirAeronave from '../../shared/services/Excluir/excluir_aeronave';

export const EditAircraft = () => {
    const history = useNavigate();

    const alreadyCreated = useRef(false);

    const [aircraft, setAircraft] = useState<Object>({});


    const { aircraftId } = useParams();


    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');

    const [statusName, setStatusName] = useState<'normal' | 'erro'>('normal');
    const [statusBrand, setStatusBrand] = useState<'normal' | 'erro'>('normal');
    const [statusFlap, setStatusFlap] = useState<'normal' | 'erro'>('normal');
    const [statusMotor, setStatusMotor] = useState<'normal' | 'erro'>('normal');
    const [statusCert, setStatusCert] = useState<'normal' | 'erro'>('normal');
    const [statusBreak, setStatusBreak] = useState<'normal' | 'erro'>('normal');

    const [flaps, setFlaps] = useState([]);
    const [motors, setMotors] = useState([]);
    const [certis, setCerts] = useState([]);
    const [breakConfigs, setBreakConfigs] = useState([]);

    const [tempFlap, setTempFlap] = useState('');
    const [tempMotor, setTempMotor] = useState('');
    const [tempCerti, setTempCerti] = useState('');
    const [tempBreak, setTempBreak] = useState('');

    const [elmntFlaps, setElmntFlaps] = useState();
    const [elmntMotors, setElmntMotors] = useState();
    const [elmntCertis, setElmntCertis] = useState();
    const [elmntBreaks, setElmntBreaks] = useState();

    const [fstStep, setFstStep] = useState<'enable' | 'disable'>('enable');
    const [scndStep, setScndStep] = useState<'enable' | 'disable'>('disable');

    const [minWeight, setMinWeight] = useState(NaN);
    const [maxWeight, setMaxWeight] = useState(NaN);

    const [minTemp, setMinTemp] = useState(NaN);
    const [maxTemp, setMaxTemp] = useState(NaN);

    const [minSpeed, setMinSpeed] = useState(NaN);
    const [maxSpeed, setMaxSpeed] = useState(NaN);

    const [minWeightStatus, setMinWeightStatus] = useState<'normal' | 'erro'>('normal');
    const [maxWeightStatus, setMaxWeightStatus] = useState<'normal' | 'erro'>('normal');

    const [minTempStatus, setMinTempStatus] = useState<'normal' | 'erro'>('normal');
    const [maxTempStatus, setMaxTempStatus] = useState<'normal' | 'erro'>('normal');

    const [minSpeedStatus, setMinSpeedStatus] = useState<'normal' | 'erro'>('normal');
    const [maxSpeedStatus, setMaxSpeedStatus] = useState<'normal' | 'erro'>('normal');

    // para download
    const [download, setDownload] = useState('');
    const [count, setCount] = useState(0);

    const [downloadFilled, setDownloadFilled] = useState('');
    const [filledCount, setFilledCount] = useState(0);

    const [upload, setUpload] = useState<File>();

    const [notUploaded, setNotUploaded] = useState(false);

    const getAeronave = () => {
        if (!alreadyCreated.current) {
            alreadyCreated.current = true;
            let getAviao = new PesquisarAeronaveId();
            getAviao.setPesquisa(aircraftId);
            let retorno = getAviao.resgatar();
            retorno.then(aviao => {
                // info aeronave
                setAircraft(aviao);

                setName(aviao['name']);
                setBrand(aviao['brand'])

                setFlaps(aviao['flaps']);
                aviao['flaps'].forEach(flap => {
                    addLista(flaps, elmntFlaps, flap['nome'], setFlaps, setTempFlap, setElmntFlaps)
                });

                setMotors(aviao['motors']);
                aviao['motors'].forEach(motor => {
                    addLista(motors, elmntMotors, motor['nome'], setMotors, setTempMotor, setElmntMotors)
                });

                setCerts(aviao['certificacoes']);
                aviao['certificacoes'].forEach(cert => {
                    addLista(certis, elmntCertis, cert['nome'], setCerts, setTempCerti, setElmntCertis)
                });

                setBreakConfigs(aviao['breaks']);
                aviao['breaks'].forEach(freio => {
                    addLista(breakConfigs, elmntBreaks, freio['nome'], setBreakConfigs, setTempBreak, setElmntBreaks)
                });

                setMinWeight(aviao['minWeight']);
                setMaxWeight(aviao['maxWeight']);
                setMinTemp(aviao['minTemp']);
                setMaxTemp(aviao['maxTemp']);
                setMinSpeed(aviao['minSpeed']);
                setMaxSpeed(aviao['maxSpeed']);
            });
        }
    }

    const handleVoltar = () => {
        history("/aircrafts-table");
    };

    const baixarTabelaPreenchida = () => {
        setDownloadFilled('');
        setDownloadFilled(`http://localhost:3001/filled-table?id=${aircraftId}`);
        setFilledCount(old => old + 1)
    }

    const baixarTabelaNova = () => {
        setDownload('');
        let baixar = new BaixarTabela();
        setDownload(baixar.getUrl());
        setCount(old => old + 1)
    }

    const addLista = (lista: any[], elmntList: any[], item: string, callbackList: Function, callbackITem: Function, callbackElmnt: Function) => {
        if (!(item === '')) {
            let array = lista;
            array.push(item);
            callbackList(array);
            callbackITem('');
            updateElmnts(lista, elmntList, callbackElmnt);
        }
    }

    const deletar = (item: string, lista: any[], elmntList: any[], callbackElmnt: Function) => {
        let array = lista;
        let indice = array.indexOf(item);
        array.splice(indice, 1);
        updateElmnts(lista, elmntList, callbackElmnt)
    }

    const transformarElemento = (item: string, lista: any[], elmntList: any[], callbackElmnt: Function) => {
        let elemento = (
            <ListaEditavel onDelete={c => deletar(c, lista, elmntList, callbackElmnt)}>
                {item}
            </ListaEditavel>
        )
        return elemento;
    }

    const updateElmnts = (list: any[], elmntList: any[], callbackSet: Function) => {
        let array = [];
        list.forEach(e => array.push(transformarElemento(e, list, elmntList, callbackSet)))
        callbackSet(array);
    }

    const conferirCampos = () => {
        let continuar = true;
        if (name === '') { setStatusName('erro'); continuar = false; } else { setStatusName('normal') }
        if (brand === '') { setStatusBrand('erro'); continuar = false; } else { setStatusBrand('normal') }
        if (flaps.length === 0) { setStatusFlap('erro'); continuar = false; } else { setStatusFlap('normal') }
        if (motors.length === 0) { setStatusMotor('erro'); continuar = false; } else { setStatusMotor('normal') }
        if (certis.length === 0) { setStatusCert('erro'); continuar = false; } else { setStatusCert('normal') }
        if (breakConfigs.length === 0) { setStatusBreak('erro'); continuar = false; } else { setStatusBreak('normal') }
        return continuar;
    }

    const goToScndStep = () => {
        if (conferirCampos()) {
            setFstStep('disable');
            setScndStep('enable');
        }
    }

    const backStep = () => {
        setFstStep('enable');
        setScndStep('disable');
    }

    const voltar = () => {
        history('/aircrafts-table')
    }

    const handleArquivo = (arq: File) => {
        setUpload(arq);
    }


    const enviar = (e) => {
        e.preventDefault();
        if (upload !== undefined) {
            let deletar = new ExcluirAeronave(aircraftId);
            deletar.deletar();

            let formData = new FormData();
            formData.append("upload", upload);
            axios.post('http://localhost:3001/register', {
                name,
                brand,
                motors,
                flaps,
                certis,
                breakConfigs,
                minWeight,
                maxWeight,
                minTemp,
                maxTemp,
                minSpeed,
                maxSpeed
            }).then(response => {
                axios.post(`http://localhost:3001/upload?id=${response.data.id}`, formData, {
                    headers: { "Content-type": "multipart/form-data" }
                });
                history(`/aircraft-profile/${response.data.id}`)
            });
        } else {
            setNotUploaded(true);
        }

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(getAeronave, []);
    return (
        <>
            <BotaoVoltar
                tipo="button"
                className="aircraftBackButton"
                onClick={handleVoltar}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </BotaoVoltar>

            <Text tipo="aircraftTitle">New Aircraft</Text>

            <Painel status={fstStep} titulo='Basic information'>
                <div className='row'>
                    <InserirString value={name} status={statusName} emMudanca={setName} id='name' tamanho='md'>Name</InserirString>
                    <InserirString value={brand} status={statusBrand} emMudanca={setBrand} id='brand' tamanho='md'>Brand</InserirString>
                </div>
                <div className='row'>
                    <span className='col'>
                        <InserirNumber value={minWeight} status={minWeightStatus} emMudanca={setMinWeight} id='minWeidght' tamanho='lg'>
                            Min. Weight (kg)
                        </InserirNumber>
                    </span>
                    <span className='col'>
                        <InserirNumber value={maxWeight} status={maxWeightStatus} emMudanca={setMaxWeight} id='maxWeight' tamanho='lg'>
                            Max. Weight (kg)
                        </InserirNumber>
                    </span>
                    <span className='col'>
                        <InserirNumber value={minTemp} status={minTempStatus} emMudanca={setMinTemp} id='minTemp' tamanho='lg'>
                            Min. Temperature (°C)
                        </InserirNumber>
                    </span>
                    <span className='col'>
                        <InserirNumber value={maxTemp} status={maxTempStatus} emMudanca={setMaxTemp} id='maxTemp' tamanho='lg'>
                            Max. Temperature (°C)
                        </InserirNumber>
                    </span>
                    <span className='col'>
                        <InserirNumber value={minSpeed} status={minSpeedStatus} emMudanca={setMinSpeed} id='minSpeed' tamanho='lg'>
                            Min. Overspeed (kt)
                        </InserirNumber>
                    </span>
                    <span className='col'>
                        <InserirNumber value={maxSpeed} status={maxSpeedStatus} emMudanca={setMaxSpeed} id='maxSpeed' tamanho='lg'>
                            Max. Overspeed (kt)
                        </InserirNumber>
                    </span>
                </div>
                <div className='row'>
                    <span className='col'>
                        <div className='rowCol'>
                            <InserirString
                                emMudanca={setTempFlap}
                                id='flap'
                                tamanho='md2'
                                value={tempFlap}
                                status={statusFlap}
                            >
                                Landing Flaps
                            </InserirString>
                            <AddButton onClick={() => addLista(flaps, elmntFlaps, tempFlap, setFlaps, setTempFlap, setElmntFlaps)} />
                        </div>
                        <ul className='lista'>
                            {elmntFlaps}
                        </ul>
                    </span>
                    <span className='col'>
                        <div className='rowCol'>
                            <InserirString
                                emMudanca={setTempMotor}
                                id='motor'
                                tamanho='md2'
                                value={tempMotor}
                                status={statusMotor}
                            >
                                Motors
                            </InserirString>
                            <AddButton onClick={() => addLista(motors, elmntMotors, tempMotor, setMotors, setTempMotor, setElmntMotors)} />
                        </div>
                        <ul className='lista'>
                            {elmntMotors}
                        </ul>
                    </span>
                    <span className='col'>
                        <div className='rowCol'>
                            <InserirString
                                emMudanca={setTempCerti}
                                id='certi'
                                tamanho='md2'
                                value={tempCerti}
                                status={statusCert}
                            >
                                Certifications
                            </InserirString>
                            <AddButton onClick={() => addLista(certis, elmntCertis, tempCerti, setCerts, setTempCerti, setElmntCertis)} />
                        </div>
                        <ul className='lista'>
                            {elmntCertis}
                        </ul>
                    </span>
                    <span className='col'>
                        <div className='rowCol'>
                            <InserirString
                                emMudanca={setTempBreak}
                                id='flap'
                                tamanho='md2'
                                value={tempBreak}
                                status={statusBreak}
                            >
                                Break configs
                            </InserirString>
                            <AddButton onClick={() => addLista(breakConfigs, elmntBreaks, tempBreak, setBreakConfigs, setTempBreak, setElmntBreaks)} />
                        </div>
                        <ul className='lista'>
                            {elmntBreaks}
                        </ul>
                    </span>
                </div>
                <p className='painelObs'>
                    Tip: Hover the mouse in an item and click on the trash to delet it.
                </p>
            </Painel>

            <div className={`rodape ${fstStep}`}>
                <FileButton tipo='next' onClick={goToScndStep}>
                    Go to next step
                </FileButton>
                <FileButton tipo='cancel' onClick={voltar}>
                    Cancel aircraft model creation
                </FileButton>
            </div>

            <Painel status={scndStep} titulo='Table for calculation'>
                <h3 className='head3'>Download the last filled table</h3>
                <FileButton tipo='download' onClick={baixarTabelaPreenchida}>
                    Download last filled table
                </FileButton>
                {downloadFilled && <iframe className='divisor' src={downloadFilled + '?c=' + filledCount} />}

                <h3 className='head3'>Download the calculation table</h3>
                <FileButton tipo='download' onClick={baixarTabelaNova}>
                    Download calculation table model
                </FileButton>
                {download && <iframe className='divisor' src={download + '?c=' + count} />}

                <h3 className='head3'>Upload the filled table for calculation</h3>
                <UploadButton receberArquivo={handleArquivo} name='upload'>
                    {upload ? upload.name : 'Upload the table for calculation'}
                </UploadButton>
                {notUploaded ? (<p className='error'>File not found</p>) : (<p></p>)}
            </Painel>

            <div className={`rodape ${scndStep}`}>
                <FileButton tipo='confirm' onClick={enviar}>
                    Create Aircraft Model
                </FileButton>
                <FileButton tipo='cancel' onClick={voltar}>
                    Cancel aircraft model creation
                </FileButton>
                <FileButton tipo='back' onClick={backStep}>
                    Back to previous step
                </FileButton>
            </div>
        </>
    )
}