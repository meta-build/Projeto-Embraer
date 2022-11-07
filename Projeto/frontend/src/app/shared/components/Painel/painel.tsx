import { ButtonHTMLAttributes, ReactNode } from 'react';
import './painel.css';

interface configs extends ButtonHTMLAttributes<HTMLButtonElement> {
    status: 'enable' | 'disable';
    titulo: string;
    children: ReactNode;
}

export const Painel = (props: configs) => {
    
    return(
        <div className="borda">
            <div className={`cabecalho ${props.status}`}>
                {props.titulo}
            </div>
            <div className={`conteudo ${props.status}`}>
                {props.children}
            </div>
        </div>
    )
}