import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

import { CredenciaisDTO } from './../../models/DTO/credenciais.dto';

import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  creds: CredenciaisDTO = {
    cpf: '',
    senha: ''
  };

  //CSS
  alinanharContainer: string;
  liberarCamposLogin = false;
  possitionLogoTransition: string;

  //classe

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    public auth: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  alterarCss(): void {
    this.alinanharContainer = ` top : 7rem;
    transition-duration: 1s;
    transition-timing-function: linear;`;

    this.possitionLogoTransition = `margin-top : 1rem;
    transition-duration: 1s;

    margin-top: 1em;
    max-width: 150px;
    max-height: 100px;
    width: auto;
    height: auto;
    `;

    this.liberarCamposLogin = true;
  }

  voltarMenu(): void {
    this.alinanharContainer = `
    transition-duration: 1s;
    transition-timing-function: linear;`;

    this.possitionLogoTransition = `margin-top : 1rem;
    transition-duration: 1s;
    
    margin-top: 3em;
    max-width: 200px;
    max-height: 150px;
    width: auto;
    height: auto;
    `;

    this.liberarCamposLogin = false;
  }

  navigateToLeitorQr(): void {
    this.router.navigate(['/leitor-qr-code']);
  }

  navigateToUsuarioLogado(): void {
    //this.showError();
    this.creds.cpf = this.creds.cpf.replace(/\D/gim, '');
    this.auth.authenticate(this.creds).subscribe(
      (response) => {
        this.auth.successfulLogin(response.headers.get('Authorization'));

        this.router.navigate(['/paciente-logado']);
      },
      (error) => {
          this.messageService.add({severity:'error', summary: 'Error', detail: `${error.message}`});
          this.creds.senha = '';
      }
    );
    console.log(this.creds);
  }

  showError() {
    console.log("Fui chamado")
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
}

  navigateToPacienteCreate(): void {
    this.router.navigate(['/paciente-cadastro']);
  }
}
