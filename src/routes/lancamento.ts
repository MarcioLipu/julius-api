import { UsuarioController } from './../controller/UsuarioController';
import { LancamentoController } from './../controller/LancamentoController';
import { Router } from 'express';
import { Lancamento } from '../entity/Lancamento';
import { routerUsuario } from './usuario';

export const routerLancamento = Router();
const lancamentoCtrl = new LancamentoController();
const usuarioCtrl = new UsuarioController();
const editarCtrl = new UsuarioController();

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
     * Editar  lançamento
     */

     routerLancamento.put('/',async(req,res)=>{
         const {idUsuario,valor,descricao,data}=req.body;
         const usuario=await lancamentoCtrl.Editar(lancamento);
         res.json(Editar);
     }else{
         res.status(404).json({message:'Usuario não Editado'})

     });
     routerLancamento.get('/',async(req,res)=>{
        const {idUsuario,valor,descricao,data}=req.body;
        const usuario=await lancamentoCtrl.ValorPos(lancamento);
        res.json(valor);
     }if(valor>0){
         res.status(404).json{message:'valor positivo'}
     }

     });
    

