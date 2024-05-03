// Importa NgModule desde @angular/core para definir un módulo
import { NgModule } from '@angular/core'; 
// Importa BrowserModule desde @angular/platform-browser para la compatibilidad del navegador
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; // Importa FormsModule desde @angular/forms para habilitar el enlace de datos bidireccional

import { AppComponent } from './app.component'; // Importa AppComponent desde app.component.ts
import { DashboardComponent } from './dashboard/dashboard.component'; // Importa DashboardComponent desde dashboard.component.ts
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; 
import { HeroesComponent } from './heroes/heroes.component'; 
import { MessagesComponent } from './messages/messages.component'; 
// Importa AppRoutingModule desde app-routing.module.ts para la configuración de enrutamiento
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    BrowserModule, // Importa BrowserModule para el soporte del navegador
    FormsModule, // Importa FormsModule para el enlace de datos bidireccional
    HttpClientModule, 
    AppRoutingModule 
  ],

  declarations: [
    // Declara AppComponent
    AppComponent, 
    DashboardComponent, // Declara DashboardComponent
    HeroesComponent, 
    HeroDetailComponent, 
    MessagesComponent 
  ],
  bootstrap: [ AppComponent ] // Define AppComponent como el componente raíz
})
// Define AppModule como el módulo principal de la aplicación
export class AppModule { } 

