import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private authService: AuthenticationService){}

  async ingresar(){
    const {error} = await this.authService.login(this.email, this.password);
    
    if (error){
      this.mensaje = 'Error detectado' + error.message;
    } else {
      this.mensaje = 'Login concluido con exito 👍';
    }
  }
}
