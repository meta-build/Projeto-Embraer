/* eslint-disable jsx-a11y/iframe-has-title */
import './newAircraft.css'

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { AddButton, BotaoVoltar, FileButton, InserirString, ListaEditavel, Painel, Text, UploadButton } from "../../shared/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BaixarTabela from '../../shared/services/Resgatar/baixarTabela';
import axios from 'axios';

export const NewAircraft = () => {
    const history = useNavigate();

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

    // para download
    const [download, setDownload] = useState('');
    const [count, setCount] = useState(0);

    const [upload, setUpload] = useState<File>();

    const handleVoltar = () => {
        history("/aircrafts-table");
    };

    const baixar = () => {
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
        console.log(upload.name)
    }

    const enviar = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("upload", upload);
        axios.post('http://localhost:3001/register', {
            name: name,
            brand: brand,
            motors: motors,
            flaps: flaps,
            certis: certis,
            breakConfigs: breakConfigs
        }).then(response => {
            console.log(response.data.id);
        });
        axios.post('http://localhost:3001/upload', formData, {
            headers: { "Content-type": "multipart/form-data" }
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <InserirString status={statusName} emMudanca={setName} id='name' tamanho='md'>Name</InserirString>
                    <InserirString status={statusBrand} emMudanca={setBrand} id='brand' tamanho='md'>Brand</InserirString>
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
                <h3 className='head3'>Download the calculation table</h3>
                <FileButton tipo='download' onClick={() => baixar}>
                    Download calculation table model
                </FileButton>
                {download && <iframe className='divisor' src={download + '?c=' + count} />}

                <h3 className='head3'>Upload the filled table for calculation</h3>
                <UploadButton receberArquivo={handleArquivo} name='upload'>
                    {upload ? upload.name : 'Upload the table for calculation'}
                </UploadButton>
            </Painel>

            <div className={`rodape ${scndStep}`}>
                <FileButton tipo='confirm' onClick={e => enviar(e)}>
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