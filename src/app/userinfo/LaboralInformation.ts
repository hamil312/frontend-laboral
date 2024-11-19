import { Experience } from "./Experience";

export class LaboralInformation{
    latestPosition: Experience;
    abilities:string[];
    previousExperiences: Experience[];
    lookingForEmployement: boolean;
    desiredPosition: string;
    desiredCountry: string;
    telecommuting: boolean;
    id: number;

    public constructor(latestPosition: Experience, abilities: string[], previousExperiences: Experience[],lookingForEmployement: boolean,desiredPosition: string, desiredCountry:string, telecommuting: boolean, id: number){
        this.latestPosition= latestPosition;
        this.abilities= abilities;
        this.previousExperiences= previousExperiences;
        this.lookingForEmployement= lookingForEmployement;
        this.desiredPosition= desiredPosition;
        this.desiredCountry= desiredCountry;
        this.telecommuting= telecommuting;
        this.id= id;
    }
}

