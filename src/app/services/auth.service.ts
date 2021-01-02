import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../models/jwt-model';
import { NuevoUsuario} from '../models/nuevo-usuario';
import { Resultado } from '../models/resultado';
import { Alumnos } from '../models/alumnos';
import { Filtro } from '../models/filtro';

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

   public alumnos(): Observable<Alumnos[]> {
    return this.httpClient.get<Alumnos[]>(this.authURL + 'catalogo/index', cabecera);
  }

   public filtro(filtro: Filtro): Observable<Alumnos[]> {
    return this.httpClient.post<Alumnos[]>(this.authURL + 'catalogo/filtro', filtro, cabecera);
  }

   public isc(): Observable<any> {
    return this.httpClient.get<any>(this.authURL + 'catalogo/sexomoderado', cabecera);
  }

   public la(): Observable<any> {
    return this.httpClient.get<any>(this.authURL + 'catalogo/sexograve', cabecera);
  }

   public porcent(): Observable<any> {
    return this.httpClient.get<any>(this.authURL + 'catalogo/porcent', cabecera);
  }

   public lg(): Observable<any> {
    return this.httpClient.get<any>(this.authURL + 'catalogo/carrerano', cabecera);
  }

   public iia(): Observable<any> {
    return this.httpClient.get<any>(this.authURL + 'catalogo/sexoleve', cabecera);
  }

   public ier(): Observable<any> {
    return this.httpClient.get<any>(this.authURL + 'catalogo/sexono', cabecera);
  }

   public lt(): Observable<any> {
    return this.httpClient.get<any>(this.authURL + 'catalogo/carreraleve', cabecera);
  }

   public cmoderado(): Observable<any> {
    return this.httpClient.get<any>(this.authURL + 'catalogo/carreramoderado', cabecera);
  }

   public cgrave(): Observable<any> {
    return this.httpClient.get<any>(this.authURL + 'catalogo/carreragrave', cabecera);
  }
}
