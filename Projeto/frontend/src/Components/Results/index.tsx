import { Component, ReactNode } from "react";
import '../../App.css';

type props = {
    resultado: number
}

export default class Results extends Component<props> {

    render(): ReactNode {
        return (
            <div className="results">
                <h5>Result:</h5>
                <h1>{this.props.resultado}</h1>
            </div>
        )
    }
}