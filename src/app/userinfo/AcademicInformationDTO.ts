export class AcademicInformationDTO {
    educativeInstitution: string;
    title: string;
    academicDiscipline: string;
    startDate: Date;
    endDate: Date;
    aditionalActivities: string[];
    description: string;
    abilities: string[];
    id: number;
  
    constructor(data: any) {
      this.educativeInstitution = data.educativeInstitution;
      this.title = data.title;
      this.academicDiscipline = data.academicDiscipline;
      this.startDate = data.startDate;
      this.endDate = data.endDate;
      this.aditionalActivities = data.aditionalActivities || [];
      this.description = data.description;
      this.abilities = data.abilities || [];
      this.id = data.id;  
    }
  }