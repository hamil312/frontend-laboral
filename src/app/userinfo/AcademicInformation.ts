export class AcademicInformation{
    id: number;
    educativeInstitution: string;
    title: string;
    academicDiscipline: string;
    startDate: Date;
    endDate: Date;
    aditionalActivities: string[];
    description: string;
    abilities: string[];

    public constructor(educativeInstitution: string, title: string, academicDiscipline: string,startDate: Date,endDate: Date, aditionalActivities:string[], description: string,abilities: string[], id: number){
        this.id= id;
        this.educativeInstitution= educativeInstitution;
        this.title= title;
        this.academicDiscipline= academicDiscipline;
        this.startDate= startDate;
        this.endDate= endDate;
        this.aditionalActivities= aditionalActivities;
        this.description = description;
        this.abilities=abilities;
    }
}