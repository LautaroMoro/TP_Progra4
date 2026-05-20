import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication';
@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  email = '';
  password = '';
  mensaje = '';

  constructor(private authService: AuthenticationService){}

  async registrarse(){
    const { error } = await this.authService.register(
      this.email, this.password);
  
    if (error) {
      this.mensaje = 'Error detectado' + error.message;
    } else {
      this.mensaje = 'Registro hecho, muchas gracias por utilizar la página 💯';
    
    }
  }
}
