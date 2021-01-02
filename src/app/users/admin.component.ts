import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Alumnos } from '../models/alumnos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

alumnos: Alumnos[] = [];
form: any = {};

	
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  this.cargarAlumnos();

  }

    cargarAlumnos(): void {
    this.authService.alumnos().subscribe(data => {
      this.alumnos = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onBusqueda(): void {
    this.authService.filtro(this.form).subscribe(data => {
      this.alumnos = data;
      //this.cargarAlumnos();
    },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
