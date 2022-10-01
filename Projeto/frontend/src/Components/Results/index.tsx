import { Component, ReactNode } from "react";
import '../../App.css';

type props = {
    result: number
}

export default class Results extends Component<props> {

    render(): ReactNode {
        return (
            <div className="results">
                <h5>{"Result(mts):"}</h5>
                <h1>{this.props.result}</h1>
            </div>
        )
    }
}