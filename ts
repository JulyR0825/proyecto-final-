import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Julliette'
  // @ts-ignore
  edad = 18
  peso = 48
  vivio=true
  AumentarAños = "18"

  CambiarNombre(){
    this.title = "July"
  }
  aumentaredad() {
    if(this.edad <150){
      this.edad += 1
    }

  }
  reduciredad(){
    if(this.edad > 0){
      this.edad -= 1
    }
  }
}
