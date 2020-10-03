import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css']
})
export class PacienteCadastroComponent implements OnInit {


  items: MenuItem[];
  
  activeIndex: number = 0;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.items = [{
      label: 'Personal',
      command: (event: any) => {
          this.activeIndex = 0;
      }
  },
  {
      label: 'Seat',
      command: (event: any) => {
          this.activeIndex = 1;
      }
  },
  {
      label: 'Payment',
      command: (event: any) => {
          this.activeIndex = 2;
      }
  },
  {
      label: 'Confirmation',
      command: (event: any) => {
          this.activeIndex = 3;
      }
  }
];


  }

  alterar(numero :number):void{
    this.activeIndex += numero;

    console.log( this.activeIndex)
  }

}
