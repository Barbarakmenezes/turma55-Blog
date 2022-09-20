import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy,Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,
  OnDestroy {
    themingSubscription: Subscription;

 constructor(
 
    private overlayContainer: OverlayContainer,
     public auth: AuthService
 ){

 }
 @HostBinding('class') public cssClass: string;
 ngOnInit(){
 
   
 }
 
  ngOnDestroy() {
    
  }
 


  title = 'blogPessoalTurma';
}
 