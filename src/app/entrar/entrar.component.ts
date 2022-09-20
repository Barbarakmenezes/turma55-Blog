import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AppComponent } from '../app.component';
import { UserLogin } from '../model/userLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
   
})
export class EntrarComponent implements OnInit {
   userLogin: UserLogin = new UserLogin()  

  constructor(
    private auth: AuthService,
    private router:Router, 
    private alertaService: AlertasService,
    private appComponent : AppComponent
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar (){
 this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
  this.userLogin = resp

  environment.token=this.userLogin.token
  environment.nome=this.userLogin.nome
  environment.foto=this.userLogin.foto
  environment.id= this.userLogin.id
  environment.tipo= this.userLogin.tipo
 

 this.userLogin.foto



  this.router.navigate(['/inicio'])
 }, erro => {
  if(erro.status == 500 || erro.status == 401){
    this.alertaService.showAlertDanger('Usuário ou senha estão incorretos!')
  }
 })
  }

  

  
}
