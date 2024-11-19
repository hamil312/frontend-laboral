import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LaboralInfoDTO} from './LaboralInfoDTO';
import { Experience } from './Experience';
import { LaboralInformation } from './LaboralInformation';
import { AcademicInformation } from './AcademicInformation';
import { AcademicInformationDTO } from './AcademicInformationDTO';
import { Usuario } from './usuario';
import { Login } from './login';

const API_URL='http://127.0.0.1:8000/api/Netlink/Llist'
const API_URL2='http://127.0.0.1:8000/api/Netlink/laboralInfoAdd'
const API_URL3='http://127.0.0.1:8000/api/Netlink/addExperience'
const API_URL4='http://127.0.0.1:8000/api/Netlink/academicInfoAdd'
const API_URL5='http://127.0.0.1:8000/api/Netlink/getLinfo/'
const API_URL6='http://127.0.0.1:8000/api/Netlink/getAcademicInfo/'
const API_URL7='http://127.0.0.1:8000/api/Netlink/laboralInfoUpdate/'
const API_URL8='http://127.0.0.1:8000/api/Netlink/academicInfoUpdate/'
const API_URL9='http://127.0.0.1:8000/api/Netlink/academicList'


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http:HttpClient) { }

  updateLaboral(labInfo: LaboralInfoDTO): Observable<LaboralInformation> {
    const url = `${API_URL7}${labInfo.id}`;
    var pexperience = new Experience(1, labInfo.latestPositionCompany, labInfo.latestPositionPosition, labInfo.latestPositionDescription);
    var laboralInfo = new LaboralInformation(pexperience,labInfo.abilities, labInfo.previousExperiences, labInfo.lookingForEmployement,labInfo.desiredPosition,labInfo.desiredCountry,labInfo.telecommuting,labInfo.id); 
    return this.http.put<LaboralInformation>(url, laboralInfo); 
  }

  updateAcademic(academicInfo: AcademicInformationDTO): Observable<AcademicInformation> {
    const url = `${API_URL8}${academicInfo.id}`;
    var academicInformation = new AcademicInformation(academicInfo.educativeInstitution, academicInfo.title,academicInfo.academicDiscipline, academicInfo.startDate,academicInfo.endDate, academicInfo.aditionalActivities,academicInfo.description,academicInfo.abilities,academicInfo.id);
    return this.http.put<AcademicInformation>(url, academicInformation); 
  }

  getLaboralInfoE(id: number): Observable<LaboralInformation>{
    const url = `${API_URL5}${id}/`;
    const laboralInf: Observable<LaboralInformation>  = this.http.get<LaboralInformation>(url);
    return laboralInf;
  }

  getAcademicInfoE(id: number): Observable<AcademicInformation>{
    const url = `${API_URL6}${id}/`;
    const academicInf: Observable<AcademicInformation>  = this.http.get<AcademicInformation>(url);
    return academicInf;
  }
  
  getLaboralInfo(): Observable<LaboralInformation[]>{
    return this.http.get<LaboralInformation[]>(API_URL);
  }
  getAcademicInfo(): Observable<AcademicInformation[]>{
    return this.http.get<AcademicInformation[]>(API_URL9);
  }

  createExperience(experience: Experience):Observable<Experience>{
    return this.http.post<Experience>(API_URL3, experience);
  }

  createLaboralInfo(labInfo: LaboralInfoDTO):Observable<LaboralInformation>{
    var pexperience = new Experience(1, labInfo.latestPositionCompany, labInfo.latestPositionPosition, labInfo.latestPositionDescription);
    var laboralInformation = new LaboralInformation(pexperience,labInfo.abilities, labInfo.previousExperiences, labInfo.lookingForEmployement,labInfo.desiredPosition,labInfo.desiredCountry,labInfo.telecommuting,labInfo.id);
    return this.http.post<LaboralInformation>(API_URL2, laboralInformation);
  }

  createAcademicInfo(academicInfo: AcademicInformationDTO):Observable<AcademicInformation>{
    var academicInformation = new AcademicInformation(academicInfo.educativeInstitution, academicInfo.title,academicInfo.academicDiscipline, academicInfo.startDate,academicInfo.endDate, academicInfo.aditionalActivities,academicInfo.description,academicInfo.abilities,academicInfo.id);
    return this.http.post<AcademicInformation>(API_URL4, academicInformation);
  }
  
  crearUsuario(usuario:Usuario):Observable<Usuario>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Datos enviados:', Usuario);
    return this.http.post<Usuario>('http://127.0.0.1:8000/api/Netlink/crear-usuario', usuario, {headers})  
  }
  Login(login: Login): Observable<Login> {
    return this.http.post<Login>('http://127.0.0.1:8000/api/Netlink/login', login)
  }
}