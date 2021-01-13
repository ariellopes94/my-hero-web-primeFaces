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
import { cpf } from 'cpf-cnpj-validator'; 

import * as EmailValidator from 'email-validator';

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

  
  //Validacao do Formulario
  valitadorCampoCpf: boolean = false;
  valitadorCampoNome: boolean = false;
  valitadorCampoEmail: boolean = false;
  valitadorCampoPassword: boolean = false;
  valitadorCampoContatoDeEmergencia: boolean =false;
  valitadorCampoTelefone: boolean = false;
  valitadorCampoPeso: boolean = false;
  valitadorCampoAltura: boolean = false;
  valitadorCampoDataNascimento: boolean = false;
  valitadorCampoGenero: boolean = false;
  valitadorTipoSanquinio: boolean = false;

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
              private messageService: MessageService) {

                this.paciente.cpf = '';
                this.paciente.nome = '';
                this.paciente.email = '';
                this.paciente.telefone = '';
                this.paciente.peso = '';
                this.paciente.altura = '';
                this.paciente.nascimento = '';
                this.paciente.sexo = '';
                this.paciente.tipoSanguinio = 0;
                
              }

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

  verrificarQueCpfValido(): boolean{
    return cpf.isValid(this.paciente.cpf);
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
    this.validatorForm();
    this.pacienteService.create(this.paciente).subscribe(() => {
     //this.paciente = new Paciente();
     this.router.navigate(['/paciente-logado']);
     this.messageService.add({severity:'success', summary: 'Service Message', detail: 'Usuário Criado'});
   
    })
    resposta => {

      let msg = 'Erro inesperado. Tente novamenta';
      this.messageService.add({severity:'error', summary: 'Error', detail: `RRRRRRRRRRSSSSSSS`});
      if(resposta.error.message){
        this.messageService.add({severity:'error', summary: 'Error', detail: `${resposta.error.message}`});
      }
    }
  }

  validatorForm(){

    this.emailValidador();
    this.nomeValidador();
    this.cpfValidador();
    this.telefoneValidador();
    this.pesoValidador();
    this.alturaValidador();
    this.dataNascimentoValidador();
    this.generoValidador();
    this.tipoSaquinioValidador();
    this.passwordValidador();
    this.contatoDeEmergenciaValidador();
 }

  nomeValidador(){
    if(this.paciente.nome.length <= 8 && this.paciente.nome.length > 0){
      this.valitadorCampoNome = true;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Nome tem que ser completo'});
      return;
    }
    if(this.paciente.nome === ''){
      this.valitadorCampoNome = true;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Nome é obrigatório '});
      return;
    }
   else{
      this.valitadorCampoNome = false;
    }
  }

 cpfValidador(){
  var cpf:string = this.paciente.cpf;
  alert(cpf)
    if(cpf === ''){
      this.valitadorCampoCpf = true;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Cpf é obrigatório '});
      return;
    }
    
    else if(!this.verrificarQueCpfValido()){
      this.valitadorCampoCpf = true;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'CPF INVALIDO'});
      return;
    }
    //cpf = cpf.replace(/\D/g, '');
     else if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf) ){ 
      this.valitadorCampoCpf = true;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'CPF INVALIDO'});
      return;
    };
  
    this.valitadorCampoCpf = false;
    [9,10].forEach(function(j){
        var soma = 0, r;
        cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
            soma += parseInt(e) * ((j+2)-(i+1));
        });
        r = soma % 11;
        r = (r <2)?0:11-r;
        if(r != cpf.substring(j, j+1)){
          this.valitadorCampoCpf = true;
          this.messageService.add({severity:'error', summary: 'Error', detail: 'CPF INVALIDO'});
        }
       
     });
    
      
    
}



 emailValidador(){
  
  if(EmailValidator.validate(this.paciente.email) == false) {
    this.valitadorCampoEmail = true;
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Email é inválido'});
    return;
  }
  

  if(this.paciente.email == ''){
    this.valitadorCampoEmail = true;
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Email é obrigatório '});
    return;
  }
  
  else{
    this.valitadorCampoEmail = false;
  }
}

passwordValidador(){
  if(this.paciente.senha == null || this.paciente.senha =='') {
    this.valitadorCampoPassword = true;
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Senha é obrigatório'});  
    return; 
  }
  else if(this.valitadorCampoPassword == true){
    this.valitadorCampoPassword = false;
}
}

contatoDeEmergenciaValidador(){

   if(this.paciente.contatosDeEmergencias.length >= 1){
    this.valitadorCampoContatoDeEmergencia = false;
}
else{
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Contato de emergencia é obrigatório'});  
    this.valitadorCampoContatoDeEmergencia = true;
  }
 
}


telefoneValidador(){
  
  if(this.paciente.telefone ==null || this.paciente.telefone ==''){
    this.valitadorCampoTelefone = true;
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Telefone é obrigatório'});  
    return; 
  }
  else if(this.valitadorCampoTelefone == true){
    this.valitadorCampoTelefone = false;
  }
}

pesoValidador(){

  if(this.paciente.peso =='' || this.paciente.peso == null){
    this.valitadorCampoPeso = true;
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Peso é obrigatório'}); 
    return;
  }
  else if(this.valitadorCampoPeso == true){
    this.valitadorCampoPeso = false;
  }
}

  alturaValidador(){

    if(this.paciente.altura ==''){
      this.valitadorCampoAltura = true;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Altura é obrigatório'}); 
      return;
    }
    else if(this.valitadorCampoAltura == true){
      this.valitadorCampoAltura = false;
    }
  }

  dataNascimentoValidador(){
    if(this.paciente.nascimento =='' || this.paciente.nascimento.match("undefined") || this.paciente.nascimento.length !=10){
      this.valitadorCampoDataNascimento = true;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Nascimento é obrigatório'}); 
      return;
    }
    else if(this.valitadorCampoDataNascimento == true){
      this.valitadorCampoDataNascimento = false;
    }
  }

  generoValidador(){
    if(this.paciente.sexo ==''){
      this.valitadorCampoGenero = true;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Gênero é obrigatório'}); 
      return;
    }
    else if(this.valitadorCampoGenero == true){
      this.valitadorCampoGenero = false;
    }
  }

  tipoSaquinioValidador(){
    if(this.paciente.tipoSanguinio === 0){
      this.valitadorTipoSanquinio = true;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Tipo Saquinio é obrigatório'}); 
      return;
    }
    else if(this.valitadorTipoSanquinio == true){
      this.valitadorCampoGenero = false;
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

