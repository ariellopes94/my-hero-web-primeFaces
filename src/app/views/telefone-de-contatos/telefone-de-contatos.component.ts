import { Paretesco } from './../../models/Enum/paretesco';
import { ContatoDeEmergencia } from './../../models/contatoDeEmergencia.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-telefone-de-contatos',
  templateUrl: './telefone-de-contatos.component.html',
  styleUrls: ['./telefone-de-contatos.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class TelefoneDeContatosComponent implements OnInit {

  paretescoSelecionado: Paretesco;
  paretescoEnum: Paretesco[];

  displayModal = false;

  @Output() contatosDeEmergenciasOutput  = new EventEmitter<ContatoDeEmergencia[]>();
  
  @Input() contatosDeEmergenciasInput: Array<ContatoDeEmergencia>;

  contatoDeEmergencia: ContatoDeEmergencia = new ContatoDeEmergencia();

  contatoDeEmergencias: ContatoDeEmergencia[] = [];
  idLinhaParaEdita: number;
  msgs: Message[] = [];

  //Controalr Modal
  modalCriarUsuario : boolean = false;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { 
    console.log("ARIEL LOPES VEIOOOO AQUIIIII")
  
    this.paretescoEnum = [
      { name: 'Mãe', value: 'MAE', id: '1' },
      { name: 'Pai', value: 'PAI', id: '2'  },
      { name: 'Cônjuge', value: 'CONJUGE', id: '3' },
      { name: 'Esposa', value: 'ESPOSA', id: '4' },
      { name: 'Esposo', value: 'ESPOSO', id: '5' },
      { name: 'Filho', value: 'FILHO', id: '6' },
      { name: 'Filha', value: 'FILHA', id: '7' },
      { name: 'Irmão', value: 'IRMAO', id: '8' },
      { name: 'irmã', value: 'IRMA', id: '9' },
      { name: 'Tia', value: 'TIA', id: '10' },
      { name: 'Tio', value: 'TIO', id: '11' },
      { name: 'Avô', value: 'AVO_H', id: '12' },
      { name: 'Avó', value: 'AVO_M', id: '13' },
      { name: 'Amigo', value: 'AMIGO', id: '14' },
      { name: 'Amiga', value: 'AMIGA', id: '15' },
      { name: 'Primo', value: 'PRIMO', id: '16' },
      { name: 'Prima', value: 'PRIMA', id: '17' },
      { name: 'Outros', value: 'OUTROS', id: '18' }

    ];
  }

  ngOnInit(): void {
    this.contatoDeEmergencias = this.contatosDeEmergenciasInput;
  }

  abrirModalCread() {
    this.modalCriarUsuario = false;
    this.displayModal = true;
  }

  paretesco(paretescoSelecionado: Paretesco) {


    this.contatoDeEmergencia.paretesco = this.paretescoSelecionado.value;
    //console.log(paretescoSelecionado.value)
  //  this.contatoDeEmergencia.paretesco(this.paretescoSelecionado.value);
  }

  addContato() {
    this.removerMascara();
    
    this.contatoDeEmergencias.push(this.contatoDeEmergencia);
    this.contatoDeEmergencia = new ContatoDeEmergencia();
    this.displayModal = false;

    this.contatosDeEmergenciasOutput.emit(this.contatoDeEmergencias);
    //  console.log(this.contatoDeEmergencia);
    //  this.contatosDeEmergencias.push(this.model);
    // this.contatosDeEmergenciasOutput.emit(this.contatosDeEmergencias);
    // this.model = {};
  }

  salvarAlteracao() {
    const editEmployeeInfo = this.idLinhaParaEdita;

    for (let i = 0; i < this.contatoDeEmergencias.length; i++) {
      if (i == editEmployeeInfo) {
        this.contatoDeEmergencias[i] = this.contatoDeEmergencia;
        this.contatoDeEmergencia = new ContatoDeEmergencia();
      }
    }
    this.displayModal = false;
  }

  editarContatos(editContatoId) {
    this.modalCriarUsuario = true;
    this.displayModal = true;
    this.idLinhaParaEdita = editContatoId;

    (this.contatoDeEmergencia.id = this.contatoDeEmergencias[editContatoId].id),
      (this.contatoDeEmergencia.nome = this.contatoDeEmergencias[
        editContatoId
      ].nome),
      (this.contatoDeEmergencia.paretesco = this.contatoDeEmergencias[
        editContatoId
      ].paretesco),
      (this.contatoDeEmergencia.numero = this.contatoDeEmergencias[
        editContatoId
      ].numero);
  }

  deletarConfirmar(id) {
    alert("CLICKOU EM DELETAR ISSO MESMO");
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle', 
      accept: () => { alert("CLICKOU EM DELETAR ISSO MESMO");
        this.msgs = [
          { severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }
        ];
        this.contatoDeEmergencias.splice(id, 1);
      },
      reject: () => {
        this.msgs = [
          { severity: 'info', summary: 'Rejected', detail: 'You have rejected' }
        ];
      }
    });
  }

  removerMascara(){
    this.contatoDeEmergencia.numero = this.contatoDeEmergencia.numero.replace(/\D/gim, '');
  }
}
