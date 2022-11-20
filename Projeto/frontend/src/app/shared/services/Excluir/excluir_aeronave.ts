import { URL } from "../Enuns/urls";

class ExcluirAeronave {
    
    private id: string;

    constructor(id: string){
        this.id = id;
    }

    public async deletar(){
        fetch(`${URL.EXCLUIR_AERONAVE}?id=${this.id}`)
    }
}
export default ExcluirAeronave