import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../models/jwt-model';
import { NuevoUsuario} from '../models/nuevo-usuario';
import { Resultado } from '../models/resultado';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'http://localhost/webservice2/api/';

  constructor(private httpClient: HttpClient) { }

   public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authURL + 'token/login', usuario, cabecera);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'token/registro', usuario, cabecera);
  }

  public resultado(resultado: Resultado): Observable<any> {
  //cambiar 21/11/20
    return this.httpClient.post<any>(this.authURL + 'token/test', resultado, cabecera);
  }

}
