import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //CSS
  alinanharContainer : string;
  liberarCamposLogin : boolean =false;
  possitionLogoTransition: string;

  //classe
inputTempSenha:string;
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

 alterarCss():void{
  this.alinanharContainer = ` top : 7rem;
    transition-duration: 1s;
    transition-timing-function: linear;`

  this.possitionLogoTransition =`margin-top : 1rem;
    transition-duration: 1s;

    margin-top: 1em;
    max-width: 150px;
    max-height: 100px;
    width: auto;
    height: auto;
    `;

  this.liberarCamposLogin =true;
 }

 voltarMenu():void{
   
  this.alinanharContainer = `
  transition-duration: 1s;
  transition-timing-function: linear;`

this.possitionLogoTransition =`margin-top : 1rem;
  transition-duration: 1s;
  
  margin-top: 3em;
  max-width: 200px;
  max-height: 150px;
  width: auto;
  height: auto;
  `;

  this.liberarCamposLogin =false;
 }

}
