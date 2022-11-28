import { URL } from "../Enuns/urls";
import Resgate from "./resgate";

export default class PesquisarUsuario implements Resgate {

    nomeUsuario: string;
    public setPesquisa(nomeUsuario: string) {
        this.nomeUsuario = nomeUsuario;
    }

    public async resgatar(){
        let json = fetch(`${URL.PESQUISAR_USUARIO}?nomeUsuario=${this.nomeUsuario}`).then(resp => resp.json())
        return json
    }
}