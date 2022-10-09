import { URL } from "../Enuns/urls";
import Excluir from "./excluir";

class ExcluirAeronave implements Excluir {
    excluir(objeto: Object): void {
        fetch(URL.EXCLUIR_AERONAVE, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        });
    }
}
export default ExcluirAeronave