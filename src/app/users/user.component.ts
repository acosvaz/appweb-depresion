import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Isc } from '../models/isc';
import { La } from '../models/la';
import { Lg } from '../models/lg';
import { Iia } from '../models/iia';
import { Ier } from '../models/ier';
import { Lt } from '../models/lt';
import { Porcent } from '../models/porcent';
import { Cmoderada } from '../models/cmoderada';
import { Cgrave } from '../models/cgrave';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

smoderada: Isc = null;
sno: Ier = null;
sleve: Iia = null;
sgrave: La = null;
cno: Lg = null;
cleve: Lt = null;
cmoderado: Cmoderada = null;
cgrave: Cgrave = null;
porcents: Porcent = null;



  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.cargarPorcentSno();
   this.cargarPorcentSleve();
   this.cargarPorcent();
   this.cargarPorcentSmoderada();
   this.cargarPorcentSgrave();
   this.cargarPorcentCno();
   this.cargarPorcentCleve();
   this.cargarPorcentCModerada();
   this.cargarPorcentCGrave();

  }

   cargarPorcentSno(): void {
    this.authService.ier().subscribe(data => {
      this.sno = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   cargarPorcentSleve(): void {
    this.authService.iia().subscribe(data => {
      this.sleve = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   cargarPorcent(): void {
    this.authService.porcent().subscribe(data => {
      this.porcents = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   cargarPorcentSmoderada(): void {
    this.authService.isc().subscribe(data => {
      this.smoderada = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   cargarPorcentSgrave(): void {
    this.authService.la().subscribe(data => {
      this.sgrave = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   cargarPorcentCno(): void {
    this.authService.lg().subscribe(data => {
      this.cno = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   cargarPorcentCleve(): void {
    this.authService.lt().subscribe(data => {
      this.cleve = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   cargarPorcentCModerada(): void {
    this.authService.cmoderado().subscribe(data => {
      this.cmoderado = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   cargarPorcentCGrave(): void {
    this.authService.cgrave().subscribe(data => {
      this.cgrave = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
