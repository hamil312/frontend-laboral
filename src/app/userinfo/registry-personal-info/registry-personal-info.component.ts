import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Usuario } from "../usuario";
import { UserInfoService } from "../userinfo.service";
import { CommonModule } from "@angular/common";
import { UserinfoModule } from "../userinfo.module";


@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registry-personal-info.component.html',
  styleUrl: './registry-personal-info.component.css'
})

export class RegistryPersonalInfoComponent implements OnInit{
  usuarioForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private usuarioService:UserInfoService) {}
  
    ngOnInit()  {

      this.usuarioForm = this.formBuilder.group({
        nombre : ['', [Validators.required, Validators.minLength(1)]],
        contrasena: ['', [Validators.required, Validators.minLength(1)]],
        fechaNacimiento: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.minLength(1)]],
        paisOrigen: ['', [Validators.required, Validators.minLength(1)]],
      });
    }

    crearUsuario(usuario: Usuario): void {
      this.usuarioService.crearUsuario(usuario).subscribe(
        (usuarioCreado) => {
          alert('usuario creado con éxito')
          this.usuarioForm.reset();
        },
      );

    }
}
