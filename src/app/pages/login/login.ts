import { Component } from '@angular/core';
import { LoginLayout } from '../../components/login-layout/login-layout';

@Component({
  imports: [LoginLayout],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {}
