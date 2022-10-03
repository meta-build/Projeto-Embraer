import { URL } from "../Enuns/urls";
import Resgate from "./resgate";

export default class ResgatarResultado implements Resgate {
    public async resgatar(){
        let json = await fetch(URL.RETORNO).then(resp => resp.json())
        return json
    }
}