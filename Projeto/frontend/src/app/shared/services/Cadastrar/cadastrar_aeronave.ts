import { URL } from "../Enuns/urls";
import Cadastrador from "./cadastrador";

class CadastradorAeronave implements Cadastrador {
    cadastrar(objeto: Object): void {
        fetch(URL.CADASTRAR_AERONAVE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default CadastradorAeronave