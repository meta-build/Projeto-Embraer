import { URL } from "../Enuns/urls";
import Cadastrador from "./cadastrador";

class CadastradorParametros implements Cadastrador {
    cadastrar(objeto: Object): void {
        fetch(URL.CALCULAR, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
export default CadastradorParametros