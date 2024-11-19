export class Usuario{
    nombre: string;
    contrasena: string;
    fechaNacimiento: string;
    email: string;
    paisOrigen: string; 
    id:number

    public constructor(id: number, nombre:string, contrasena:string, fechaNacimiento: string, email: string, paisOrigen: string){
        this.nombre = nombre
        this.contrasena = contrasena;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.paisOrigen = paisOrigen;
        this.id = id
    }
}
