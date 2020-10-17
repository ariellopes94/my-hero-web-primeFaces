import { Paciente } from './../../models/paciente';
import { ContatoDeEmergencia } from './../../models/contatoDeEmergencia.model';
import { Medicamento } from './../../models/medicamento.model';
import { Doenca } from './../../models/doenca.model';
import { Alergia } from './../../models/alergia.model';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

interface Sexo {
  name: string,
  code: string
}


@Component({
  selector: 'app-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css']
})
export class PacienteCadastroComponent implements OnInit {

  sexo: Sexo[];
  sexoSelecionada: Sexo;
//
  alergiasComponentMultiselect: Alergia[] = [];
  doencasComponentMultiselect: Doenca[] = [];
  medicamentosComponentMultiselect: Medicamento[] = [];

  contatosEmergenciaModal: ContatoDeEmergencia[] = [];

  paciente: Paciente = new Paciente();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  checked: boolean = false;
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

    this.sexo = [
      {name: 'Masculino', code: 'MASCULINO'},
      {name: 'Feminino', code: 'FEMININO'}
  ];
  }

  alterar(numero: number): void {
    this.activeIndex += numero;

    console.log(this.activeIndex);
  }

  salvar(form: Form): void {
    console.log(form);
  }

  selecionadoTipoSanquinio(tipoSanquinioSelecionada): void {
    this.paciente.tipoSanguinio = tipoSanquinioSelecionada.value;
    alert('PACIENTE PESSOA' + tipoSanquinioSelecionada.value);
    //this.paciente.alergias = alergiasSelecionadas;
    //   this.paciente.alergias.push(alergiasSelecionadas);
    //this.alergiasComponentMultiselect = [];
    //  this.alergiasComponentMultiselect.push(alergiasSelecionadas);
  }

  selecionadoEstadoMoradia(estadoMoradiaSelecionada): void {
    this.paciente.estadoMoradia = estadoMoradiaSelecionada.code;
    alert('PACIENTE PESSOA' + estadoMoradiaSelecionada.code);
    //this.paciente.alergias = alergiasSelecionadas;
    //   this.paciente.alergias.push(alergiasSelecionadas);
    //this.alergiasComponentMultiselect = [];
    //  this.alergiasComponentMultiselect.push(alergiasSelecionadas);
  }

  funcaoSexo(sexoSelecionado): void{
    this.paciente.sexo = sexoSelecionado.code;

  }

  funcaoContatoDeEmergencia(contatosDeEmergencias) : void{
    this.paciente.contatosDeEmergencias = contatosDeEmergencias;
  }
}
