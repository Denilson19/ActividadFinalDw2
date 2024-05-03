import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      loggedIn => {
        if (loggedIn) {
          // El usuario ha iniciado sesión correctamente
        } else {
          // Mostrar un mensaje de error o tomar alguna otra acción
          console.log('Credenciales incorrectas');
        }
      }
    );
  }
}
