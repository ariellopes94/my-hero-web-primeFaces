import { TipoSaquinio } from './../../../models/Enum/tipoSanquinioEnum';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/*
interface TipoSaquinio {
  name: string;
  value: string;
}
*/

@Component({
  selector: 'app-tipo-saquinio-select',
  templateUrl: './tipo-saquinio-select.component.html',
  styleUrls: ['./tipo-saquinio-select.component.css']
})
export class TipoSaquinioSelectComponent implements OnInit {
  
  @Output() tipoSanquinioSelectOutput = new EventEmitter();

  @Input() tipoSanquinioInput: TipoSaquinio;

  tipoSanquinioSelecionado: TipoSaquinio;
  tipoSaquinioEnum: TipoSaquinio[];

  ngOnInit(): void {

    this.tipoSanquinioSelecionado = this.tipoSanquinioInput;
  }

  constructor() {
    this.tipoSaquinioEnum = [
      { name: 'A+', value: 'A_POSITIVO' },
      { name: 'A-', value: 'A_NEGATIVO' },
      { name: 'B+', value: 'B_POSITIVO' },
      { name: 'B-', value: 'B_NEGATIVO' },
      { name: 'AB+', value: 'AB_POSITIVO' },
      { name: 'AB-', value: 'AB_NEGATIVO' },
      { name: 'O+', value: 'O_POSITIVO' },
      { name: 'O-', value: 'O_NEGATIVO' }
    ];

    // this.tipoSanquinioSelecionado = { name: 'O-', value: 'O_NEGATIVO' };
  }

  seuMetodo(ts: any) {
    this.tipoSanquinioSelectOutput.emit(this.tipoSanquinioSelecionado);
  }
}
