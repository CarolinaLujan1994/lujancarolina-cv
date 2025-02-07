import { Component, OnInit } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Luján, Carolina';
  public persona: any


  ngOnInit() {
    console.log('Componente inicializado')
    this.datosSobreMi()
    console.log(this.persona)
  }

  datosSobreMi() {
    this.persona = {
      nombre: 'Carolina',
      descripcion: 'jasgdasjkldhajdhalkda',
      foto: ''
    }
  }
}
