import { URL } from "../Enuns/urls";
import Cadastrador from "./cadastrador";

class UploadTabela implements Cadastrador {
    cadastrar(objeto: Object): void {
        fetch(URL.UPLOAD_TABELA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }
}
export default UploadTabela