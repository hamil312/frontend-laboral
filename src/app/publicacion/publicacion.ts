export class Publicacion {
    id: number;
    titulo: string;
    descripcion: string;
    multimedia: string;
    like: number;
    date_created: Date;

    constructor(id: number, titulo: string, descripcion: string, multimedia: string, number:number, date_created: Date) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.multimedia = multimedia;
        this.like = number;
        this.date_created = date_created;
    }
}