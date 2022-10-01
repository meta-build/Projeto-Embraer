import './selecionar.css'

interface config {
    label: string,
    id: string,
    onChange: Function
    tamanho: "sm" | "md" | "gg"
    opcoes: Array<Object>
}

export const Selecionar = (props:config) => {

    let opcoesTag = [];
    props.opcoes.forEach(elemento => {
        opcoesTag.push(<option value={elemento["valor"]}>{elemento["nome"]}</option>)
    })

    return(
        <>
        <select onChange={props.onChange()} className="inputPilot" name={props.id} id={props.tamanho}>
            <option disabled selected>{props.label}</option>
            {opcoesTag}
        </select>
        </>
    )
};