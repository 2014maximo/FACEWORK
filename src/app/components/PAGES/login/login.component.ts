import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mostrarOcultarRecordar: boolean = false;

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    this.mostrarOcultarRecordar = false;
  }

  recordarClave(cambiar: boolean){
    this.mostrarOcultarRecordar = cambiar;
  }

}
