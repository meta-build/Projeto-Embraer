import { URL } from "../Enuns/urls";
import Resgate from "./resgate";

export default class PesquisarAeronave implements Resgate {

    nome: string;
    public setPesquisa(nome: string) {
        this.nome = nome;
    }

    public async resgatar(){
        let json = fetch(`${URL.PESQUISAR_AERONAVE}?name=${this.nome}`).then(resp => resp.json())
        return json
    }
}