import { PacienteService } from './../../services/paciente.service';
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
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { stringify } from '@angular/compiler/src/util';

interface Sexo {
  name: string,
  code: string
}

interface Mes {
  label: string;
  value: string;
}

@Component({
  selector: 'app-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css'],
  providers: [MessageService]
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

  alergiasComponentMultiselect: Alergia[] = [];
  doencasComponentMultiselect: Doenca[] = [];
  medicamentosComponentMultiselect: Medicamento[] = [];

  contatosEmergenciaModal: ContatoDeEmergencia[] = [];

  paciente: Paciente = new Paciente();

  checked: boolean = false;
  val1: string;
  items: MenuItem[];
  activeIndex = 0;

  // Data de Nascimento
  dia :number
  mesSelecionado: Mes;
  ano: number;

  mes: Mes[];

  confirmarSenha: string;

  constructor(private router: Router, private pacienteService: PacienteService,
              private messageService: MessageService) {}

  ngOnInit(): void {

    this.paciente.doadorDeOrgao =false;

    this.mes = [
      {label:'Janeiro', value:'01'},
      {label:'Fevereiro', value:'02'},
      {label:'Março', value:'03'},
      {label:'Abril', value:'04'},
      {label:'Maio', value:'05'},
      {label:'Junho', value:'06'},
      {label:'Julho', value:'07'},
      {label:'Agosto', value:'08'},
      {label:'Setembro', value:'09'},
      {label:'Outubro', value:'10'},
      {label:'Novembro', value:'11'},
      {label:'Dezembro', value:'12'},

  ];

    //
    this.paciente.imageAvatarUrl = 'www.imagem.url';

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
  
    //Input
    this.tipoSanquinioSelectInput = tipoSanquinioSelecionada;
  }

  selecionadoEstadoMoradia(estadoMoradiaSelecionada): void {
    this.paciente.estadoMoradia = estadoMoradiaSelecionada.code;

    // Mandar de volta Input
    this.estadoMoradiaSelectInput = estadoMoradiaSelecionada;
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

  removerMascara(){
   this.paciente.cpf = this.paciente.cpf.replace(/\D/gim, '');

   
   this.paciente.telefone = this.paciente.telefone.replace(/\D/gim, '');
   
  }
  
  createPaciente():void{
    this.removerMascara();
    this.formatarDataParaEnvio();
    this.pacienteService.create(this.paciente).subscribe(() => {
     //this.paciente = new Paciente();
     console.log("PACIENTE CRIADO");
    })
    resposta => {

      let msg = 'Erro inesperado. Tente novamenta';
  
      if(resposta.error.message){
        msg = resposta.error.message
      }
    }
  }

  formatarDataParaEnvio(){
  //  1994-10-25
   // ano-mes-dia

 this.paciente.nascimento = `${this.ano}-${this.mesSelecionado}-${this.dia}`
   console.log("===============================================================================")
   
  }
  cofirmarPassword(senha:string){
    this.confirmarSenha = senha;
    
    console.log
    if(this.paciente.senha.length <= senha.length){

      console.log("CAIU NO LOG")
      if(this.paciente.senha == senha){
        console.log("SENHA IGUAIS")
        senha = ""
      }

      else{
        this.messageService.add({severity:'error', summary: 'Error', detail: `As senhas não coincidem`});
      }
    
    }

    
    
  }
}

