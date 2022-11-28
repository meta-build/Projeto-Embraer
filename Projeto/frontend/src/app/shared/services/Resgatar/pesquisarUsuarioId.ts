import { URL } from "../Enuns/urls";
import Resgate from "./resgate";

export default class PesquisarUsuarioId implements Resgate {

    idusuario: string;
    public setPesquisa(idusuario: string) {
        this.idusuario = idusuario;
        console.log("id:" + idusuario);
        
    }

    public async resgatar(){
        let json = fetch(`${URL.PESQUISAR_USUARIO_ID}?idusuario=${this.idusuario}`).then(resp => resp.json())
        console.log("user:" + this.idusuario);
        
        return json
    }
}