import './botao.css'

interface config{
    tipo: "submit" | "reset",
    texto: string
}

export const Botao = (props: config) => {

    let classe = () => {
        // eslint-disable-next-line eqeqeq
        if (props.tipo == "submit"){
            return "botao azul"
        } else {
            return "botao cinza"
        }
    }

    return(
        <>
        <button type={props.tipo} className={classe()}>{props.texto}</button>
        </>
    )
}