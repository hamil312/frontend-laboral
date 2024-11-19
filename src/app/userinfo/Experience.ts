export class Experience{
    company: string;
    position: string;
    description: string;
    id: number;

    public constructor(id:number, company:string, position: string, description: string){
        this.company = company;
        this.position = position;
        this.description = description;
        this.id = id;
    }
}
