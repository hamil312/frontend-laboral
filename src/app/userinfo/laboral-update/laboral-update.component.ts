import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { LaboralInfoDTO} from '../LaboralInfoDTO';
import { LaboralInformation } from '../LaboralInformation';
import { UserInfoService } from '../userinfo.service';

@Component({
  selector: 'app-laboral-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './laboral-update.component.html',
  styleUrl: './laboral-update.component.css'
})
export class LaboralUpdateComponent {
  userForm!: FormGroup;
  laboralInfoID!: number;
  laboralInformation!: LaboralInfoDTO;

  constructor(private formBuilder: FormBuilder, private userService: UserInfoService,private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.laboralInfoID = Number(this.route.snapshot.paramMap.get('id'));
    this.userForm = this.formBuilder.group({
      previousExperiences: this.formBuilder.array([]), // Array para experiencias previas
      abilities: this.formBuilder.array([]),           // Array para habilidades
      lookingForEmployement: [true, [Validators.required]],
      desiredPosition: ['', [Validators.required, Validators.minLength(5)]],
      desiredCountry: ['', [Validators.required, Validators.minLength(3)]],
      telecommuting: [true, [Validators.required]],
      latestPositionCompany: ['', [Validators.required, Validators.minLength(2)]],
      latestPositionPosition: ['', [Validators.required, Validators.minLength(5)]],
      latestPositionDescription: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.userService.getLaboralInfo().subscribe(laboralInfo => {
      var previousInfo = laboralInfo.find(laboral => laboral.id === this.laboralInfoID)!;
      var data = {
        id: previousInfo.id,
        previousExperiences: previousInfo.previousExperiences, // Array para experiencias previas
        abilities: previousInfo.abilities,           // Array para habilidades
        lookingForEmployement: previousInfo.lookingForEmployement,
        desiredPosition: previousInfo.desiredPosition,
        desiredCountry: previousInfo.desiredCountry,
        telecommuting: previousInfo.telecommuting,
        latestPositionCompany: previousInfo.latestPosition.company,
        latestPositionPosition: previousInfo.latestPosition.position,
        latestPositionDescription: previousInfo.latestPosition.description
      }
      this.laboralInformation = new LaboralInfoDTO(data);
      if (this.laboralInformation) {
        this.userForm.patchValue(this.laboralInformation);
      }
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

  editLaboralInfo(): void {
    if (this.userForm.valid) {
      const editedLaboral: LaboralInfoDTO = {
        ...this.laboralInformation,
        ...this.userForm.value
      };

      this.userService.updateLaboral(editedLaboral).subscribe(
        (response) => {
          alert('Información laboral editada con éxito');
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error al editar la información', error);
        }
      );
    }
  }
}
