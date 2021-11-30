import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public abrirMenu: string = '';
  public iconAbrir: boolean = true;

  constructor() {
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  private inicializarVariables(){

  }

  public abreMenu(){
    this.abrirMenu = 'menu-hamburger-open';
    this.iconAbrir = false;
  }
  public cierreMenu(){
    this.abrirMenu = 'menu-hamburger-close';
    this.iconAbrir = true;
  }






}
