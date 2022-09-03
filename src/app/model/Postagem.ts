import { Tema } from "./Tema"
import { User } from "./user"

export class Postagem {
    public id: number
    public titulo: string
    public texto: string 
    public date: Date 
    public usuario: User
    public tema: Tema
    
}