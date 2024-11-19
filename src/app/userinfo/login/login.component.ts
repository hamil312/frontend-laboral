import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../userinfo.service'
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private loginService: UserInfoService, private router: Router) { }
  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.minLength(6)]],
      contrasena: ['', [Validators.required, Validators.minLength(5)]],


    })

  }
  login(login: Login) {
    this.loginService.Login(login).subscribe(
      (loginValidado) => {
        alert("Ha iniciado sesión")
        this.loginForm.reset();
        this.router.navigate(['publicacion']);
      },
      elseError => { alert("El usuario o la contraseña son incorrectos") }
    );
    
  }
}
