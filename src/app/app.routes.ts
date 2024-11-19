import { Routes } from '@angular/router';
import { AcademicRegistryComponent } from './userinfo/academic-registry/academic-registry.component';
import { RegistryComponent } from './userinfo/registry/registry.component';
import { PublicacionListComponent } from './publicacion/publicacion-list/publicacion-list.component';
import { RegistryPersonalInfoComponent } from './userinfo/registry-personal-info/registry-personal-info.component';
import { LoginComponent } from './userinfo/login/login.component';
import { LaboralUpdateComponent } from './userinfo/laboral-update/laboral-update.component';
import { AcademicUpdateComponent } from './userinfo/academic-update/academic-update.component';
export const routes: Routes = [
    {
        path:'',
        component:PublicacionListComponent
    },
    {
        path:'addLaboralInfo',
        component:RegistryComponent
    },
    {
        path:'addAcademicInfo',
        component:AcademicRegistryComponent
    },
    {
        path:'publicacion',
        component: PublicacionListComponent
    },
    {
        path: 'newusuario',
        component:RegistryPersonalInfoComponent
    },
    {
        path: 'login',
        component: LoginComponent 
    },
    {
        path: 'updateLaboral/:id',
        component: LaboralUpdateComponent 
    },
    {
        path: 'updateAcademic/:id',
        component: AcademicUpdateComponent 
    },
];
