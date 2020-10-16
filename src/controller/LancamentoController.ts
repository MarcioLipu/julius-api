import { getManager } from 'typeorm';
import { Lancamento } from "../entity/Lancamento";

export class LancamentoController {

    async salvar(lancamento: Lancamento) {
        const lancamentoSalvo = await getManager().save(lancamento);
        return lancamentoSalvo;
    }
    async Editar(Editar:Editar){
        const editar=await getManager().save(Editar);
        return editar;
    }
    async Delete(Delete:Delete){
        const deletar=await getManager().save(Delete);
        return deletar;
}
async ValorPos(ValorPos:ValorPos){
    const valor=await getManager().save(ValorPos);
    return valor;
}
    async ValorNeg(ValorNeg:ValorNeg){
        const valor=await getManager().save(ValorNeg);
        return valor;
}
}