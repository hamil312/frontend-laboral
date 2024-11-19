import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { AcademicInformationDTO} from '../AcademicInformationDTO';
import { AcademicInformation } from '../AcademicInformation';
import {UserInfoService } from '../userinfo.service';

@Component({
  selector: 'app-academic-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './academic-update.component.html',
  styleUrl: './academic-update.component.css'
})
export class AcademicUpdateComponent {
  academicForm!: FormGroup;
  academicInfoID!: number;
  academicInformation!: AcademicInformationDTO;

  constructor(private formBuilder: FormBuilder, private academicService:UserInfoService,private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.academicInfoID = Number(this.route.snapshot.paramMap.get('id'));
    this.academicForm = this.formBuilder.group({
      educativeInstitution: ['', [Validators.required, Validators.minLength(5)]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      academicDiscipline: ['', [Validators.required, Validators.minLength(5)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      aditionalActivities: this.formBuilder.array([]),
      description: ['', [Validators.required, Validators.minLength(5)]],
      abilities: this.formBuilder.array([]),
    });
    this.academicService.getAcademicInfo().subscribe(academicInfo => {
      var previousInfo = academicInfo.find(academic => academic.id === this.academicInfoID)!;
      var data = {
        id: previousInfo.id,
        educativeInstitution: previousInfo.educativeInstitution,
        title: previousInfo.title,
        academicDiscipline: previousInfo.academicDiscipline,
        startDate: previousInfo.startDate,
        endDate: previousInfo.endDate,
        aditionalActivities: previousInfo.aditionalActivities,
        description: previousInfo.description,
        abilities: previousInfo.abilities,
      }
      this.academicInformation = new AcademicInformationDTO(data);
      if (this.academicInformation) {
        this.academicForm.patchValue(this.academicInformation);
      }
    });
  }

  get aditionalActivities(): FormArray {
    return this.academicForm.get('aditionalActivities') as FormArray;
  }

  get abilities(): FormArray {
    return this.academicForm.get('abilities') as FormArray;
  }

  // Métodos para añadir y eliminar habilidades
  addAbility() {
    this.abilities.push(this.formBuilder.control('', Validators.required));
  }

  removeAbility(index: number) {
    this.abilities.removeAt(index);
  }

  addAditionalActivities() {
    this.aditionalActivities.push(this.formBuilder.control('', Validators.required));
  }

  removeAditionalActivities(index: number) {
    this.aditionalActivities.removeAt(index);
  }

  editAcademicInfo(): void {
    if (this.academicForm.valid) {
      const editedAcademic: AcademicInformationDTO = {
        ...this.academicInformation,
        ...this.academicForm.value
      };

      this.academicService.updateAcademic(editedAcademic).subscribe(
        (response) => {
          alert('Información Academica editada con éxito');
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error al editar la información', error);
        }
      );
    }
  }
}
