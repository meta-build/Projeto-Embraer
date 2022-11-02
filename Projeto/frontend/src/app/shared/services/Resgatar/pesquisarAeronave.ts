import { URL } from "../Enuns/urls";
import Resgate from "./resgate";

export default class PesquisarAeronave implements Resgate {

    name: string;
    public setPesquisa(nome: string) {
        this.name = nome;
    }

    public async resgatar(){
        let json = fetch(`${URL.PESQUISAR_AERONAVE}?name=${this.name}`).then(resp => resp.json())
        return json
    }
}