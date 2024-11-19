import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { LaboralInfoDTO} from '../LaboralInfoDTO';
import { LaboralInformation } from '../LaboralInformation';
import { UserInfoService } from '../userinfo.service';

@Component({
  selector: 'app-registry',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.css'
})
export class RegistryComponent{
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserInfoService) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      previousExperiences: this.formBuilder.array([]), // Array para experiencias previas
      abilities: this.formBuilder.array([]), 
      lookingForEmployement: [true, [Validators.required]],
      desiredPosition: ['', [Validators.required, Validators.minLength(5)]],
      desiredCountry: ['', [Validators.required, Validators.minLength(3)]],
      telecommuting: [true, [Validators.required]],
      latestPositionCompany: ['', [Validators.required, Validators.minLength(2)]],
      latestPositionPosition: ['', [Validators.required, Validators.minLength(5)]],
      latestPositionDescription: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get previousExperiences(): FormArray {
    return this.userForm.get('previousExperiences') as FormArray;
  }

  get abilities(): FormArray {
    return this.userForm.get('abilities') as FormArray;
  }

  // Métodos para añadir y eliminar experiencias
  addExperience() {
    const experienceGroup = this.formBuilder.group({
      position: ['', [Validators.required,Validators.minLength(5)]],
      description: ['', [Validators.required,Validators.minLength(5)]],
      company: ['', [Validators.required,Validators.minLength(5)]]
    });
    this.previousExperiences.push(experienceGroup);
  }

  removeExperience(index: number) {
    this.previousExperiences.removeAt(index);
  }

  // Métodos para añadir y eliminar habilidades
  addAbility() {
    this.abilities.push(this.formBuilder.control('', Validators.required));
  }

  removeAbility(index: number) {
    this.abilities.removeAt(index);
  }

  createLaboralInfo(): void {
    const laboralInfo = this.userForm.value;
    this.userService.createLaboralInfo(laboralInfo).subscribe(() => {
      alert('Laboral information added');
      this.userForm.reset();
    });
  }
}
