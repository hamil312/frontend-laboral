import { Experience } from "./Experience";
export class LaboralInfoDTO {
    abilities: string[];
    lookingForEmployement: boolean;
    desiredPosition: string;
    desiredCountry: string;
    telecommuting: boolean;
    id: number;
    
    // Experience fields (for latestPosition and previousExperiences)
    latestPositionCompany: string;
    latestPositionPosition: string;
    latestPositionDescription: string;
    previousExperiences: Experience[];
  
    constructor(data: any) {
      this.abilities = data.abilities || [];
      this.lookingForEmployement = data.lookingForEmployement;
      this.desiredPosition = data.desiredPosition;
      this.desiredCountry = data.desiredCountry;
      this.telecommuting = data.telecommuting;
      this.id = data.id;
  
      this.latestPositionCompany = data.latestPositionCompany;
      this.latestPositionPosition = data.latestPositionPosition;
      this.latestPositionDescription = data.latestPositionDescription;
      this.previousExperiences = data.previousExperiences || [];
    }
  }