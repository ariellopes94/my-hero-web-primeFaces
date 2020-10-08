import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  //CSS
  alinanharContainer: string;
  liberarCamposLogin = false;
  possitionLogoTransition: string;

  //classe
  inputTempSenha: string;

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {}

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
    this.router.navigate(["/leitor-qr-code"]);
  }

  navigateToPacienteCreate(): void {
    this.router.navigate(["/paciente-cadastro"]);
  }
}
