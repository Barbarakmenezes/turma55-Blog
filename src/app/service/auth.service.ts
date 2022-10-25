
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { UserLogin } from '../model/userLogin';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient

) { }

entrar (userLogin : UserLogin) : Observable<UserLogin>{
  return this.http.post<UserLogin>(`${environment.url}/usuarios/logar` , userLogin)
}

cadastrar (user:User) : Observable <User>{
  return this.http.post<User>(`${environment.url}/usuarios/cadastrar`, user)
}

atualizar(user:User) : Observable <User>{
  return this.http.put<User>(`${environment.url}/usuarios/atualizar`, user)
}


getByIdUser(id:number) : Observable<User> {
  return this.http.get<User>(`${environment.url}/usuarios/${id}`)
}

logado() {
  let ok : boolean = false

  if (environment.token != '') {
    ok=true
  }
return ok 
}

}


