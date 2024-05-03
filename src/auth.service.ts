import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    // Aquí puedes agregar la lógica para validar las credenciales
    if (username === 'noel19102002ledezma@gmail.com' && password === 'noel1910') {
      // Credenciales válidas
      this.loggedIn.next(true);
      this.router.navigate(['/app-root']);
    } else {
      // Credenciales inválidas
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
