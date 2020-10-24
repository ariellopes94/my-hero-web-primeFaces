import { EstadoDeMoradia } from './../../models/Enum/estaoDeMoradiaEnum';
import { TipoSaquinio } from './../../models/Enum/tipoSanquinioEnum';
import { AlergiasService } from './../../services/alergias.service';
import { Paciente } from './../../models/paciente';
import { ContatoDeEmergencia } from './../../models/contatoDeEmergencia.model';
import { Medicamento } from './../../models/medicamento.model';
import { Doenca } from './../../models/doenca.model';
import { Alergia } from './../../models/alergia.model';
import { Component, Input, OnInit } from '@angular/core';
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

  alergiasSelecionadasInput : Alergia[] ;
  doencasSelecionadasInput : Doenca[];
  medicamentosSelecionadasInput : Medicamento[];
  contatosEmergenciaModalInput: ContatoDeEmergencia[]=[];

  tipoSanquinioSelectInput: TipoSaquinio;
  
  estadoMoradiaSelectInput: EstadoDeMoradia;
  
  
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
    

    //Input
    this.tipoSanquinioSelectInput = tipoSanquinioSelecionada;

    //this.paciente.alergias = alergiasSelecionadas;
    //   this.paciente.alergias.push(alergiasSelecionadas);
    //this.alergiasComponentMultiselect = [];
    //  this.alergiasComponentMultiselect.push(alergiasSelecionadas);
  }

  selecionadoEstadoMoradia(estadoMoradiaSelecionada): void {
    this.paciente.estadoMoradia = estadoMoradiaSelecionada.code;
    alert('PACIENTE PESSOA' + estadoMoradiaSelecionada.code);


    // Mandar de volta Input
    this.estadoMoradiaSelectInput = estadoMoradiaSelecionada;


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

    // Mandar de volta para o imput;
    this.contatosEmergenciaModalInput = contatosDeEmergencias;
  }

  funcaoAlergia(alergiaSelecionada) : void {
    this.paciente.alergias = alergiaSelecionada;

    // Mandar de volta para o imput;
    this.alergiasSelecionadasInput = alergiaSelecionada;
  }

  funcaoDoenca(doencaSelecionada) : void {
    this.paciente.doencas = doencaSelecionada;

    // Mandar de volta para o imput;
    this.doencasSelecionadasInput = doencaSelecionada;
  }

  funcaoMedicamento(medicamentoSelecionada) : void {
    this.paciente.medicamentos = medicamentoSelecionada;

    // Mandar de volta para o imput;
    this.medicamentosSelecionadasInput = medicamentoSelecionada;
  }

}
