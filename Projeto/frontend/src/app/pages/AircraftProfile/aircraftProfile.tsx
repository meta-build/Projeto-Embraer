/* eslint-disable jsx-a11y/iframe-has-title */
import './aircraftProfile.css'

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import { BotaoVoltar, FileButton, Lista, Painel, Rotulo, Text } from "../../shared/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PesquisarAeronaveId from '../../shared/services/Resgatar/pesquisarAeronaveId';
import BaixarTabela from '../../shared/services/Resgatar/baixarTabela';

export const AircraftProfile = () => {
    const history = useNavigate();

    const { aircraftId } = useParams();
    
    const [aircraft, setAircraft] = useState({});
    const [download, setDownload] = useState('');
    const [count, setCount] = useState(0);

    const getAeronave = () => {
        let getAviao = new PesquisarAeronaveId();
        getAviao.setPesquisa(aircraftId);
        let retorno = getAviao.resgatar();
        retorno.then(aviao => {
            console.log(aviao[0])
            setAircraft(aviao[0]);
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
                    <Rotulo tamanho='md' rotulo='Brand'>[aircraft's brand]</Rotulo>
                </div>
                <div className='row'>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo=''>Landing Flaps</Rotulo>
                        <Lista listagem={['default flap']} />
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo=''>Motors</Rotulo>
                        <Lista listagem={['default motor']} />
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo=''>Certifications</Rotulo>
                        <Lista listagem={['default certification']} />
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo=''>Break Configs</Rotulo>
                        <Lista listagem={['manual break config']} />
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
                <FileButton tipo='edit'>
                    Edit Aircraft Model
                </FileButton>
                <FileButton tipo='delete'>
                    Delete Aircraft Model
                </FileButton>
            </div>
        </>
    )   
}