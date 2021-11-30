import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderHomeComponent } from './shared/slider-home/slider-home.component';
import { SliderFrasesHomeComponent } from './shared/slider-frases-home/slider-frases-home.component';
import { LoginComponent } from './PAGES/login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SliderHomeComponent,
    SliderFrasesHomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
