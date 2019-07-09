import { Component } from '@angular/core';
import { directiveInject } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'talentiumAngular';

funk(){
  alert("Radi")
}
vidljivost(){
  let dix = document.getElementById("divonja");
  dix.style.visibility= "hidden";
  let divic = document.getElementById("divic");
   divic.style.visibility="visible";
}
vidljivos(){
 
}
  
}
