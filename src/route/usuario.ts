import { Usuario } from '../entity/Usuario';
import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

/**
 * Serviço pra salvar um novo usuário
 */
routerUsuario.post('/', async (req, res) => {
    const { nome, email } = req.body;
    const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
});


/**
 * Serviço para recuperar todos os usuários
 */
routerUsuario.get('/', async (req, res) => {
    const usuarios = await usuarioCtrl.recuperarTodos();
    res.json(usuarios);
    
});

/**
 * Serviço para recuperar os lançamentos de um determinado usuário
 */
routerUsuario.get('/lancamentos/:idUsuario', async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const lancamentos = await usuarioCtrl.recuperarLancamentosDoUsuario
    (idUsuario);
    res.json(lancamentos);
});
/** 
     * Editando o lançamento cujo id seja igual a :id
     */


routerUsuario.put('/lancamentos/:idUsuario',async(req,res)=>{
    const idUsuario=parseInt(req.params.idUsuario);
    const alterar=await usuarioCtrl.EditadoUsuario(idUsuario);
    res.json(Editar);


});
routerUsuario.get('/lancamentos/:idUsuario',async(req,res)=>{
    const idUsuario=parseInt(req.params.idUsuario);
    const valor=await usuarioCtrl.ValorPos(valor);
    res.json(valor);
});

routerUsuario.get('/lancamentos/:idUsuario',async(req,res)=>{
    const idUsuario=parseInt(req.params.idUsuario);
    const valor=await usuarioCtrl.ValorNeg(valor);
    res.json(valor);
});

