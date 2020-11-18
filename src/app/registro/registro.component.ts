import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: any = {};
  private usuario: any = {};
  isRegister = false;
  isRegisterFail = false;
  errorMsg = 'Coloca todos los campos obligatorios';

  constructor(private authService: AuthService) { }

  listOne = ['Ingenieria en Sistemas Computacionales', 'Ingenieria en Industrias Alimentarias', 'Ingenieria en Energias Renovables', 'Licenciatura en Administracion','Licenciatura en Gastronomia', 'Licenciatura en Turismo'];
  listTwo = ['Mujer', 'Hombre'];

  ngOnInit() {
  }

onRegister() {
    this.usuario = new NuevoUsuario(this.form.nombre, this.form.username, this.form.password, this.form.matricula, this.form.carrera, this.form.semestre, this.form.grupo, this.form.edad, this.form.sexo);
    this.authService.registro(this.usuario).subscribe(data => {
      this.isRegister = true;
      this.isRegisterFail = false;
    },
      (error: any) => {
        console.log(error.error.mensaje);
        this.errorMsg;
        this.isRegister = false;
        this.isRegisterFail = true;
      }
    );
  }

}
