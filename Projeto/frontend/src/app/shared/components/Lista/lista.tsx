import './lista.css'

import { ButtonHTMLAttributes, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

interface configString extends ButtonHTMLAttributes<HTMLButtonElement> {
    listagem: string[];
}

interface configEditable extends ButtonHTMLAttributes<HTMLButtonElement> {
    onDelete: Function;
}

export const Lista = (props: configString) => {

    return (
        <ul className="lista">
            {props.listagem.map(elemento => (
                <li>
                    {elemento}
                </li>
            ))}
        </ul>
    )
}

export const ListaEditavel = (props: configEditable) => {
    return (
        <li className='listItem'>
            {props.children}
            <span className='actionIcon deleteIcon'>
                <FontAwesomeIcon icon={faTrash} onClick={e => props.onDelete(props.children)}/>
            </span>
        </li>
    )
}