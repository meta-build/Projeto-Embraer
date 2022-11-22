/* eslint-disable jsx-a11y/iframe-has-title */
import './aircraftProfile.css'

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import ReactModal from 'react-modal';

import { BotaoVoltar, CancelDeleteBtn, ConfirmDeleteBtn, FileButton, Painel, Rotulo, Text } from "../../shared/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PesquisarAeronaveId from '../../shared/services/Resgatar/pesquisarAeronaveId';
import ExcluirAeronave from '../../shared/services/Excluir/excluir_aeronave';


export const AircraftProfile = () => {
    const history = useNavigate();

    const { aircraftId } = useParams();

    const [aircraft, setAircraft] = useState<Object>({});

    const [flaps, setflaps] = useState([]);
    const [motors, setmotors] = useState([]);
    const [certs, setcerts] = useState([]);
    const [breaks, setbreaks] = useState([]);
    const [minWeight, setMinWeight] = useState(NaN);
    const [maxWeight, setMaxWeight] = useState(NaN);
    const [minTemp, setMinTemp] = useState(NaN);
    const [maxTemp, setMaxTemp] = useState(NaN);
    const [minSpeed, setMinSpeed] = useState(NaN);
    const [maxSpeed, setMaxSpeed] = useState(NaN);

    // para download
    const [download, setDownload] = useState('');
    const [count, setCount] = useState(0);

    // modal
    const [modalVis, setModalVis] = useState(false);
    const [modalConfirm, setModalConfirm] = useState(false);

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
            setMinWeight(aviao['minWeight']);
            setMaxWeight(aviao['maxWeight']);
            setMinTemp(aviao['minTemp']);
            setMaxTemp(aviao['maxTemp']);
            setMinSpeed(aviao['minSpeed']);
            setMaxSpeed(aviao['maxSpeed']);
        });
    }

    const baixar = () => {
        setDownload('');
        setDownload(`http://localhost:3001/filled-table?id=${aircraftId}`);
        setCount(old => old + 1);
    }

    const handleVoltar = () => {
        history("/aircrafts-table");
    };

    const handleEditar = () => {
        history(`/edit-aircraft/${aircraftId}`);
    }

    const handleModalVis = () => {
        if (modalVis) {
            setModalVis(false);
        } else {
            setModalVis(true);
        }
    }

    const handleConfirmModal = () => {
        if (modalConfirm) {
            setModalConfirm(false);
        } else {
            setModalConfirm(true);
        }
    }

    const deletarAeronave = () => {
        let deletar = new ExcluirAeronave(aircraftId);
        deletar.deletar().then(i => {
            handleConfirmModal();
        });
    }

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
                        <Rotulo tamanho='lg' rotulo="Min. Weight">{minWeight}</Rotulo>
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo="Max. Weight">{maxWeight}</Rotulo>
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo="Min. Temperature">{minTemp}</Rotulo>
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo="Max. Temperature">{maxTemp}</Rotulo>
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo="Min. Overspeed">{minSpeed}</Rotulo>
                    </span>
                    <span className='col'>
                        <Rotulo tamanho='lg' rotulo="Max. Overpeed">{maxSpeed}</Rotulo>
                    </span>
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
                {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }} />}
            </Painel>

            <div className='rodape'>
                <FileButton tipo='edit' onClick={e => handleEditar()}>
                    Edit Aircraft Model
                </FileButton>
                <FileButton tipo='delete' onClick={e => handleModalVis()}>
                    Delete Aircraft Model
                </FileButton>
            </div>
            <ReactModal
                isOpen={modalVis}
                onRequestClose={handleModalVis}
                contentLabel='exemplo'
                overlayClassName='modalOverlay'
                className='modalContent'
            >
                <h2>Delete {aircraft['name']} aircraft model from the system?</h2>
                <div className='confirmPainel'>
                    <ConfirmDeleteBtn onClick={e => deletarAeronave()}>Confirm</ConfirmDeleteBtn>
                    <CancelDeleteBtn onClick={e => handleModalVis()}>Cancel</CancelDeleteBtn>
                </div>
            </ReactModal>
            <ReactModal
                isOpen={modalConfirm}
                onRequestClose={handleConfirmModal}
                contentLabel='teste'
                overlayClassName='modalOverlay'
                className='modalContent'
            >
                <h2>Aicraft {aircraft['name']} deleted</h2>
                <div className='confirmPainel'>
                    <FileButton tipo='confirm'  onClick={handleVoltar}>
                        Back to Aircraft models page
                    </FileButton>
                </div>
            </ReactModal>
        </>
    )
}