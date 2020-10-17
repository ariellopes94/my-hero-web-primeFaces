import { Paciente } from './../../models/paciente';
import { ContatoDeEmergencia } from './../../models/contatoDeEmergencia.model';
import { Medicamento } from './../../models/medicamento.model';
import { Doenca } from './../../models/doenca.model';
import { Alergia } from './../../models/alergia.model';
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
  alergiasComponentMultiselect: Alergia[] = [];
  doencasComponentMultiselect: Doenca[] = [];
  medicamentosComponentMultiselect: Medicamento[] = [];

  contatosEmergenciaModal: ContatoDeEmergencia[] = [];

  paciente: Paciente = new Paciente();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  val1: string;
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

  SelecionadoTipoSanquinio(tipoSanquinioSelecionada): void {
    this.paciente.tipoSanguinio = tipoSanquinioSelecionada.value;
    alert('PACIENTE PESSOA' + tipoSanquinioSelecionada.value);
    //this.paciente.alergias = alergiasSelecionadas;
    //   this.paciente.alergias.push(alergiasSelecionadas);
    //this.alergiasComponentMultiselect = [];
    //  this.alergiasComponentMultiselect.push(alergiasSelecionadas);
  }

  SelecionadoEstadoMoradia(estadoMoradiaSelecionada): void {
    this.paciente.estadoMoradia = estadoMoradiaSelecionada.code;
    alert('PACIENTE PESSOA' + estadoMoradiaSelecionada.code);
    //this.paciente.alergias = alergiasSelecionadas;
    //   this.paciente.alergias.push(alergiasSelecionadas);
    //this.alergiasComponentMultiselect = [];
    //  this.alergiasComponentMultiselect.push(alergiasSelecionadas);
  }
}
