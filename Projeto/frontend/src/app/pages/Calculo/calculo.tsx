import { Botao, Resultado } from "../../shared/components"
import { Selecionar } from "../../shared/components"
import './calculo.css';

export const Calculo = () => {

    let modelos = [
        {
            nome: 'Avião padrão',
            valor: 0
        }
    ]

    let motors = [
        {
            nome: 'Motor',
            valor: 0
        }
    ]

    return (
        <>
            <div className="calculadora">
                <form onSubmit={(e) => { }}>
                    <div className="insercao">
                        <Selecionar label="Aircraft Model" id="aircraftModel" onChange={() => { }} tamanho="md" opcoes={modelos} />
                        <Selecionar label="Aircraft Model" id="aircraftModel" onChange={() => { }} tamanho="sm" opcoes={modelos} />
                        <Selecionar label="Aircraft Model" id="aircraftModel" onChange={() => { }} tamanho="sm" opcoes={modelos} />
                        <Selecionar label="Aircraft Model" id="aircraftModel" onChange={() => { }} tamanho="sm" opcoes={modelos} />
                        <Selecionar label="Aircraft Model" id="aircraftModel" onChange={() => { }} tamanho="sm" opcoes={modelos} />
                    </div>
                    <div className="botoes">
                        <Botao tipo="submit" texto="Calculare"/>
                        <Botao tipo="reset" texto="Reset"/>
                    </div>
                </form>
                <Resultado result={123}/>
            </div>
        </>
    )
}