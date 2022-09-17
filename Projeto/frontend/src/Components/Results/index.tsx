import { Component, ReactNode } from "react";

export default class Results extends Component {

    render(): ReactNode {
        return (
            <div className="containerFooter">
                <div className="leftFooterSide">
                    <form action="">
                        <button className="blueColorful">Calculate</button>
                        <button className="greyColorful">Clear All</button>
                    </form>
                </div>
                <div className="rightFooterSide">
                    <textarea placeholder="  Result:" name="" id="" cols={90} rows={5.5}></textarea>
                </div>
            </div>
        )
    }
}