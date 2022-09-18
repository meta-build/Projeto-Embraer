import { Component } from "react";
import '../../App.css';
import Results from "../Results";

export default class InputArea extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <form>
                        <select className="inputPilot" name="aircraft-model" id='md' placeholder="Aircraft Model">
                            <option selected>Default model</option>
                        </select>
                        <input className="inputPilot" name="wind" id='sm' placeholder="Wind (kt)" type="number" />
                        <input className="inputPilot" name="motor" id='sm' placeholder="Motor" type="text" />
                        <input className="inputPilot" name="temp" id='sm' placeholder="Temperature (°C)" type="number" />
                        <input className="inputPilot" name="slope" id='sm' placeholder="Slope (%)" type="number" />
                        <input className="inputPilot" name="weight" id='sm' placeholder="Aircraft Weight (kg)" type="number" min={10000} step={1000}/>
                        <input className="inputPilot" name="certification" id='sm' placeholder="Certification" type="text" />
                        <input className="inputPilot" name="airportAltitude" id='sm' placeholder="Airport Altitude (ft)" type="number" />
                        <input className="inputPilot" name="overspeed" id='sm' placeholder="Overspeed (kt)" type="number" />
                        <select className="inputPilot" name="aircraft-model" id='sm'>
                            <option selected disabled>Reverser</option>
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                        </select>
                        <select className="inputPilot" name="aircraft-model" id='sm'>
                            <option selected disabled>Airstrip Condition</option>
                            <option value={6}>Dry</option>
                            <option value={5}>Wet</option>
                            <option value={4}>Compact Snow</option>
                            <option value={3}>Loose Snow</option>
                            <option value={2}>Standing Water/Slush</option>
                            <option value={1}>ICE</option>
                        </select>
                        <input className="inputPilot" name="overspeed" id='sm' placeholder="Braking Application" type="text" />
                        <input className="inputPilot" name="overspeed" id='sm' placeholder="Ice Buildup" type="text" />
                        <input className="inputPilot" name="overspeed" id='sm' placeholder="Ice Buildup" type="text" />
                        <input className="inputPilot" name="overspeed" id='sm' placeholder="Landing Flap" type="text" />
                        <input className="inputPilot" name="overspeed" id='sm' placeholder="Track Conditions" type="text" />
                        <div className="footer">
                            <span className="btn-section">
                                <button type="submit" className="botao azul">Calculate</button>
                                <button className="botao cinza">Clear All</button>
                            </span>
                            <Results resultado={0}/>
                        </div>
                    </form>
                </div>
                
            </>
        )
    }
}