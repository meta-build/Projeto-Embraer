import './resultado.css';

interface input{
    result: number
    label: string
}

export const Resultado = (props:input) => {
    return (
        <>
            <div className="results">
                <h5>{"Result" + props.label}</h5>
                <h1>{props.result}</h1>
            </div>
        </>
    )
}