import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { AcademicInformationDTO} from '../AcademicInformationDTO';
import { AcademicInformation } from '../AcademicInformation';
import { UserInfoService } from '../userinfo.service';


@Component({
  selector: 'app-academic-registry',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './academic-registry.component.html',
  styleUrl: './academic-registry.component.css'
})
export class AcademicRegistryComponent {
  academicForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserInfoService) {}

  ngOnInit() {
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

  createAcademicInfo(): void {
    const academicInfo = this.academicForm.value;
    this.userService.createAcademicInfo(academicInfo).subscribe(() => {
      alert('Academic information added');
      this.academicForm.reset();
    });
  }
}
