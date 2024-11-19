import { Publicacion } from './../publicacion';
import { PublicacionService } from '../publicacion.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-publicacion-list',
  standalone: true,
imports: [NgFor, RouterModule],
  templateUrl: './publicacion-list.component.html',
  styleUrl: './publicacion-list.component.css'
})
export class PublicacionListComponent implements OnInit {

  onDelete(arg0: number) {
    throw new Error('Method not implemented.');
  }
  Publicacion: Array<Publicacion> = [];
  constructor(private routerPath: Router,private PublicacionService: PublicacionService) { }
  ngOnInit(): void {
    this.obtenerPublicacion();
  }
  obtenerPublicacion() {
    this.PublicacionService.obternerPublicacion().subscribe(vs => {
      this.Publicacion = vs;
      console.log(this.Publicacion);
    });
  }
  onLikeNavigate(like: number) {
    this.routerPath.navigate([`#`])
  }
  onComentsNavigate(comments: string) {
    this.routerPath.navigate([`./Publicacion/comments/${comments}`])
  }
  onEditarNavigate(id: number) {
    this.routerPath.navigate([`./Publicacion/edit/${id}`])
  }
}

