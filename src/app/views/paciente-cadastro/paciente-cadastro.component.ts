import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css']
})
export class PacienteCadastroComponent implements OnInit {
  items: MenuItem[];

  activeIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pessoa',
        command: (event: any) => {
          this.activeIndex = 0;
        }
      },
      {
        label: 'Doenca',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Alergia',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      } /*,
      {
        label: 'Confirmation',
        command: (event: any) => {
          this.activeIndex = 3;
        }
      }*/
    ];
  }

  alterar(numero: number): void {
    this.activeIndex += numero;

    console.log(this.activeIndex);
  }

  salvar(form: Form): void {
    console.log(form);
  }
}
