import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

export class UsuarioController {

    async salvar(usuario: Usuario) {
        const usuarioSalvo = await getManager().save(usuario);
        return usuarioSalvo;
    }

    async recuperarTodos() {
        const usuarios = await getManager().find(Usuario);
        return usuarios;
    }

    async recuperarPorId(id: number) {
        const usuario = await getManager().findOne(Usuario, id);
        return usuario;
    }

    async recuperarLancamentosDoUsuario(id: number) {
        const usuario = await getManager().findOne(Usuario, id, {
            relations: ['lancamentos']
        });
        return usuario.lancamentos;
    }

async editar(id:number){
    const usuarioEditado=await getManager().save(Usuario);
    return usuarioEditado;

});
const del = async (req: Request, res: Response) => {
    return res.json(await getDel(Usuario).delete(req.params.id));
  };
  const ValorPos = async (req: Request, res: Response) => {
    return res.json(await getValorPos(Usuario).ValorPos(req.params.id));
  };
  const ValorNeg = async (req: Request, res: Response) => {
    return res.json(await getValorNeg(Usuario).ValorNeg(req.params.id));
  };

}

