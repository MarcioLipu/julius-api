import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Lancamento } from "./Lancamento";

@Entity()
export class Usuario {

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @OneToMany(() => Lancamento, lancamento => lancamento.usuario)
    lancamentos: Lancamento[];

    @OneToMany(()=>Editar,editar=>editar.Usuario)
    editar:Editar[];

    @OneToMany(()=>Delete,delete=>Delete.Usuario)
    delete:delete[];

    @OneToMany(()=>Valor,valor=>valor.valor)
    valor:valor[];

    @OneToMany(()=>ValorPos,valorPos=>valorPos.ValorPos)
    valorPos:ValorPos[];

    @OneToMany(()=>ValorNeg,valorNeg=>valorNeg.ValorNeg)
    valorNeg:ValorNeg[];
}
