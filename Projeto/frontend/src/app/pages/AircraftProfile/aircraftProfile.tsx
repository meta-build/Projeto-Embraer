/* eslint-disable jsx-a11y/iframe-has-title */
import './aircraftProfile.css'

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import { BotaoVoltar, FileButton, Painel, Rotulo, Text } from "../../shared/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PesquisarAeronaveId from '../../shared/services/Resgatar/pesquisarAeronaveId';
import BaixarTabela from '../../shared/services/Resgatar/baixarTabela';

export const AircraftProfile = () => {
    const history = useNavigate();

    const { aircraftId } = useParams();
    
    const [aircraft, setAircraft] = useState<Object>({});

    const [flaps, setflaps] = useState([]);
    const [motors, setmotors] = useState([]);
    const [certs, setcerts] = useState([]);
    const [breaks, setbreaks] = useState([]);
    
    // para download
    const [download, setDownload] = useState('');
    const [count, setCount] = useState(0);

    const getAeronave = () => {
        let getAviao = new PesquisarAeronaveId();
        getAviao.setPesquisa(aircraftId);
        let retorno = getAviao.resgatar();
        retorno.then(aviao => {
            setAircraft(aviao);
            setflaps(aviao['flaps']);
            setmotors(aviao['motors']);
            setcerts(aviao['certificacoes']);
            setbreaks(aviao['breaks']);
        });
    }

    const baixar = () => {
        setDownload('');
        let baixar = new BaixarTabela();
        setDownload(baixar.getUrl());
        setCount(old => old + 1)
    }

    const handleVoltar = () => {
        history("/aircrafts-table");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(getAeronave, [])
    return (
        <>
            <BotaoVoltar
                tipo="button"
                className="aircraftBackButton"
                onClick={handleVoltar}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </BotaoVoltar>

            <Text tipo="aircraftTitle">Aircraft {aircraft['name']}:</Text>

            <Painel status="enable" titulo='Basic information'>
                <div className='row'>
                    <Rotulo tamanho='md' rotulo="Model's name">{aircraft['name']}</Rotulo>
                    <Rotulo tamanho='md' rotulo='Brand'>{aircraft['brand']}</Rotulo>
                </div>
                <div className='row'>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo=''>Landing Flaps</Rotulo>
                        <ul className='lista'>
                            {flaps.map(e => (<li>{e.nome}</li>))}
                        </ul>
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo=''>Motors</Rotulo>
                        <ul className='lista'>
                            {motors.map(e => (<li>{e.nome}</li>))}
                        </ul>
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo=''>Certifications</Rotulo>
                        <ul className='lista'>
                            {certs.map(e => (<li>{e.nome}</li>))}
                        </ul>
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo=''>Break Configs</Rotulo>
                        <ul className='lista'>
                            {breaks.map(e => (<li>{e.nome}</li>))}
                        </ul>
                    </span>
                </div>
            </Painel>

            <Painel status='enable' titulo='Table for calculation'>
                <h3 className='head3'>Download the {aircraft['name']}'s calculation table</h3>
                <FileButton tipo='download' onClick={baixar} type='submit'>
                    Download calculation table
                </FileButton>
                {download && <iframe src={download + '?c=' + count} style={{display:'none'}}/>}
            </Painel>

            <div className='rodape'>
                {/* <FileButton tipo='edit'>
                    Edit Aircraft Model
                </FileButton> */}
                <FileButton tipo='delete'>
                    Delete Aircraft Model
                </FileButton>
            </div>
        </>
    )   
}