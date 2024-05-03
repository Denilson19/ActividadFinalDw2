// Importaciones necesarias
// Importa el decorador Component y OnInit desde Angular
import { Component, OnInit } from '@angular/core'; 
// Importa la interfaz Hero desde el archivo hero.ts
import { Hero } from '../hero'; 
// Importa el servicio HeroService desde hero.service.ts
import { HeroService } from '../hero.service'; 

@Component({
  // Selector del componente
  selector: 'app-dashboard', 
  templateUrl: './dashboard.component.html', // Plantilla HTML del componente
  styleUrls: [ './dashboard.component.css' ] // Estilos CSS del componente
})
// Definición de la clase DashboardComponent que implementa OnInit
export class DashboardComponent implements OnInit { 
  heroes: Hero[] = []; // Arreglo de héroes inicializado como vacío

  // Constructor que recibe el servicio HeroService como inyección de dependencias
  constructor(private heroService: HeroService) { } 

  ngOnInit(): void { // Método OnInit para inicializar el componente
    this.getHeroes(); // Llama al método para obtener héroes al inicializar el componente
  }

  // Método para obtener héroes
  getHeroes(): void { 
    this.heroService.getHeroes() // Llama al método getHeroes() del servicio HeroService
      .subscribe(heroes => this.heroes = heroes.slice(1, 5)); // Suscribe al observable y asigna los primeros 4 héroes al arreglo heroes
  }
}

