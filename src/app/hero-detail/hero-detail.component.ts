// Importaciones necesarias
import { Component, OnInit } from '@angular/core'; 
// Importa ActivatedRoute desde @angular/router para obtener información de la ruta activa
import { ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common'; // Importa Location desde @angular/common para interactuar con la ubicación del navegador

// Importa la interfaz Hero desde el archivo hero.ts
import { Hero } from '../hero'; 
import { HeroService } from '../hero.service'; 

// Selector del componente
@Component({
  selector: 'app-hero-detail', 
  templateUrl: './hero-detail.component.html', // Plantilla HTML del componente
  styleUrls: [ './hero-detail.component.css' ] // Estilos CSS del componente
})
// Definición de la clase HeroDetailComponent que implementa OnInit
export class HeroDetailComponent implements OnInit { 
  hero: Hero | undefined; // Definición de una variable hero de tipo Hero o indefinida

  constructor(
    private route: ActivatedRoute, // Inyección de dependencia de ActivatedRoute para obtener información de la ruta activa
    private heroService: HeroService, 
    private location: Location 
  ) {}

  // Método OnInit para inicializar el componente
  ngOnInit(): void { 
    this.getHero(); // Llama al método para obtener el héroe al inicializar el componente
  }

  getHero(): void { // Método para obtener el héroe
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtiene el id del héroe de los parámetros de la ruta activa
    this.heroService.getHero(id) // Llama al método getHero() del servicio HeroService con el id obtenido
      .subscribe(hero => this.hero = hero); // Suscribe al observable y asigna el héroe obtenido a la variable hero
  }

  goBack(): void { // Método para retroceder en la ubicación del navegador
    this.location.back(); // Utiliza el método back() de Location para retroceder en la ubicación del navegador
  }
}


//import {Component, Input} from '@angular/core';
/*import { Component, OnInit, Input } from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { RouterModule } from '@angular/router';




@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe, RouterModule],
})*/
/*export class HeroDetailComponent {
  @Input() hero?: Hero;
  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  goBack(): void {
    this.location.back();
  }
}*/


/*export class HeroDetailComponent implements OnInit {
  //hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  @Input() hero?: Hero;
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
*/
