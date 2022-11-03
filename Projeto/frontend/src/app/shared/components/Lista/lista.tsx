import './lista.css'

import { ButtonHTMLAttributes } from "react";

interface configString extends ButtonHTMLAttributes<HTMLButtonElement> {
    listagem: string[];
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