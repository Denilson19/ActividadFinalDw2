import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
//import { Component } from '@angular/core';
/*import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

//Iportamos el uso de array mock-heroes.
//import {HEROES} from '../mock-heroes';
//Importamos para utlizar bucles Ngfor
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms'
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
// Cambiamos el componente para que sea standlone y importado NgFor
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent
  ],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/*export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}*/

/*export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

//export class HeroesComponent {
  // hero = 'Windstorm'
  /*hero: Hero = {
    id:1,
    name: 'Windstorm'
  };*/
  //Asignar a la variable heroes el array HEROES.
  
  /*heroes = HEROES;
  selectedHero?: Hero;*/

  /*heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}*/

  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/
 /* getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}*/
