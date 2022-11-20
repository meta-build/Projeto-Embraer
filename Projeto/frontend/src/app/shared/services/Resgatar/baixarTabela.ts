import { URL } from "../Enuns/urls";
import Resgate from "./resgate";

export default class BaixarTabela implements Resgate {
    public async resgatar(){
        // let json = await fetch(URL.DOWNLOAD_TABELA).then(resp => resp.json());
        return URL.DOWNLOAD_TABELA;
    }

    public getUrl () {
        return URL.DOWNLOAD_TABELA
    }

    public getUrlTabela (){
        return URL.DOWNLOAD_TABELA_PREENCHIDA
    }

}