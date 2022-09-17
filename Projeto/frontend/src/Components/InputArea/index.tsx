import { Component } from "react";
import '../../App.css';

export default class InputArea extends Component {


    render() {
        return (
            <div className="container">
                <div className="leftSide">
                    <form action="">
                        <input className="inputPilot" id="diferent" placeholder="Aircraft Model" type="text" /><br />
                    </form>
                    <div className="leftContainer">
                        <div>
                            <form action="">
                                <input className="inputPilot" placeholder="Motor" type="text" /><br />
                                <input className="inputPilot" placeholder="Aircraft Weight (kg)" type="text" /><br />
                                <input className="inputPilot" placeholder="Overspeed (kt)" type="text" /><br />
                                <input className="inputPilot" placeholder="Braking Application" type="text" /><br />
                                <input className="inputPilot" placeholder="Landing Flap" type="text" /><br />
                            </form>
                        </div>
                        <div>
                            <form action="">
                                <input className="inputPilot" placeholder="Temperature (ºC)" type="text" /><br />
                                <input className="inputPilot" placeholder="Certification" type="text" /><br />
                                <input className="inputPilot" placeholder="Reverser" type="text" /><br />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <form action="">
                        <input className="inputPilot" placeholder="Wind (kt)" type="text" /><br />
                        <input className="inputPilot" placeholder="Slope (%)" type="text" /><br />
                        <input className="inputPilot" placeholder="Airport Altitude (ft)" type="text" /><br />
                        <input className="inputPilot" placeholder="Airstrip Condition" type="text" /><br />
                        <input className="inputPilot" placeholder="Ice Buildup" type="text" /><br />
                        <input className="inputPilot" placeholder="Track Conditions" type="text" /><br />
                    </form>
                </div>
            </div>
        )
    }
}