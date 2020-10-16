import { UsuarioController } from './../controller/UsuarioController';
import { LancamentoController } from './../controller/LancamentoController';
import { Router } from 'express';
import { Lancamento } from '../entity/Lancamento';
import { routerUsuario } from './usuario';

export const routerLancamento = Router();
const lancamentoCtrl = new LancamentoController();
const usuarioCtrl = new UsuarioController();

/**
 * Serviço para salvar um novo lançamento
 */
routerLancamento.post('/', async (req, res) => {
    const { idUsuario, valor, descricao, data } = req.body;
    const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
    if (usuario) {
        const lancamento = new Lancamento(valor, descricao, data, usuario);
        const lancamentoSalvo = await lancamentoCtrl.salvar(lancamento);
        res.json(lancamentoSalvo);
    } else {
        res.status(404).json({ mensagem: 'Usuário do lançamento não encontrado' });
    }
    /** 
     * subscrever o lançamento
     */

     routerSubscrever.put('/',async(req,res)=>{
         const {idUsuario,valor,descricao,data}=req.body;
         const usuario=await lancamentoCtrl.subscreverUsuario(lancamento);
         res.json(lancamentoSuscrito);
     }else{
         res.status(404).json({message:'Usuario não subscrito'})

     });
     routerLancamento.get('/', async (req, res) => {
        const {  valor } = req.body;
        const usuario = await usuarioCtrl.ValorPos(valor);
        if (valor>0) {
            const valor = new ValorPos(valor);
            const valorPos = await lancamentoCtrl.ValorPos(valor);
            res.json(valor);
     
});
routerLancamento.get('/', async (req, res) => {
    const { valor } = req.body;
    const usuario = await usuarioCtrl.ValorNeg(Lancamento);
    if (valor<0) {
        const valor = new ValorNeg(valor);
        const valorNeg = await lancamentoCtrl.ValorNeg(valor);
        res.json(valorNeg)
    });
    
}