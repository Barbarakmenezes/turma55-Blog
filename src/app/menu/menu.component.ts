import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    
  nome= environment.nome
  
  foto= environment.foto
  id=environment.id

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  
  sair(){
    this.router.navigate(['/inicial'])
    environment.token= ''
    environment.nome= ''
    environment.foto = ''
    environment.id = 0
  }

}
