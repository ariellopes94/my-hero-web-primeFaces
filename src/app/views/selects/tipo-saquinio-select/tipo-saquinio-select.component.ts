import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-saquinio-select',
  templateUrl: './tipo-saquinio-select.component.html',
  styleUrls: ['./tipo-saquinio-select.component.css']
})
export class TipoSaquinioSelectComponent implements OnInit {
  tipoSanquinioSelecionado: string;
  tipoSaquinioEnum: any[];

  ngOnInit(): void {}

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
  }
}
