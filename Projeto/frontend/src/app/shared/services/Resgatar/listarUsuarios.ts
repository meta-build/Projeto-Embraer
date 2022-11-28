import { URL } from "../Enuns/urls";
import Resgate from "./resgate";

export default class ListarUsuarios implements Resgate {
    public async resgatar(){
        let json = await fetch(URL.LISTAR_USUARIOS).then(resp => resp.json());
        return json;
    }

}
