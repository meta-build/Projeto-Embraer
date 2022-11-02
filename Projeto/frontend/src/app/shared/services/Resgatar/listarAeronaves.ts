import { URL } from "../Enuns/urls";
import Resgate from "./resgate";

export default class ListarAeronaves implements Resgate {
    public async resgatar(){
        let json = await fetch(URL.LISTAR_AERONAVES).then(resp => resp.json());
        return json;
    }

}
