import { ContatoDeEmergencia } from './../../models/contatoDeEmergencia.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-telefone-de-contatos',
  templateUrl: './telefone-de-contatos.component.html',
  styleUrls: ['./telefone-de-contatos.component.css'],
  providers: [ConfirmationService]
})
export class TelefoneDeContatosComponent implements OnInit {
  displayModal = false;

  @Output() contatosDeEmergenciasOutput  = new EventEmitter<ContatoDeEmergencia[]>();
  
  contatoDeEmergencia: ContatoDeEmergencia = new ContatoDeEmergencia();

  contatoDeEmergencias: ContatoDeEmergencia[] = [];
  idLinhaParaEdita: number;
  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  abrirModalCread() {
    this.displayModal = true;
  }

  addContato() {
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
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
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
}
