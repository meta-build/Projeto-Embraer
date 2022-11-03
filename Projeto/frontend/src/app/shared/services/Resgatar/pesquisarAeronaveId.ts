import { URL } from "../Enuns/urls";
import Resgate from "./resgate";

export default class PesquisarAeronaveId implements Resgate {

    id: string;
    public setPesquisa(id: string) {
        this.id = id;
    }

    public async resgatar(){
        let json = fetch(`${URL.PESQUISAR_AERONAVE_ID}?id=${this.id}`).then(resp => resp.json())
        return json
    }
}