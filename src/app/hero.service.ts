import { Injectable } from '@angular/core'; // Importa Injectable desde @angular/core para definir un servicio inyectable
import { Hero } from './hero'; // Importa la interfaz Hero desde hero.ts
import { HEROES } from './mock-heroes'; // Importa el arreglo HEROES desde mock-heroes.ts
import { Observable, of } from 'rxjs'; // Importa Observable y of desde rxjs para manejar observables
import { MessageService } from './message.service'; // Importa MessageService desde message.service.ts para enviar mensajes

@Injectable({ // Decorador Injectable para marcar la clase como un servicio inyectable
  providedIn: 'root' // Proporciona este servicio en el nivel raíz del inyector Angular
})
export class HeroService { // Definición de la clase HeroService

  constructor(private messageService: MessageService) { } // Constructor que recibe MessageService como inyección de dependencias

  getHeroes(): Observable<Hero[]> { // Método para obtener todos los héroes
    const heroes = of(HEROES); // Crea un observable de héroes a partir del arreglo HEROES
    this.messageService.add('HeroService: fetched heroes'); // Agrega un mensaje al servicio de mensajes
    return heroes; // Devuelve el observable de héroes
  }

  getHero(id: number): Observable<Hero> { // Método para obtener un héroe por su id
    const hero = HEROES.find(h => h.id === id)!; // Encuentra el héroe con el id especificado en el arreglo HEROES
    this.messageService.add(`HeroService: fetched hero id=${id}`); // Agrega un mensaje al servicio de mensajes
    return of(hero); // Devuelve un observable del héroe encontrado
  }
}

