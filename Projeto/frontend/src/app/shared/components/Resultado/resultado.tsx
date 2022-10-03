import './resultado.css';

interface input{
    result: number
}

export const Resultado = (props:input) => {
    return (
        <>
            <div className="results">
                <h5>{"Result(mts):"}</h5>
                <h1>{props.result}</h1>
            </div>
        </>
    )
}