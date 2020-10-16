import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-de-moradia',
  templateUrl: './estado-de-moradia.component.html',
  styleUrls: ['./estado-de-moradia.component.css']
})
export class EstadoDeMoradiaComponent implements OnInit {
  selectedEstadoMoradia: any;
  estadoDeMoradia: any[];

  ngOnInit(): void {}

  constructor() {
    this.estadoDeMoradia = [
      { name: 'Acre', code: 'ACRE', id: '1' },
      { name: 'Alagoas', code: 'ALAGOAS', id: '2' },
      { name: 'Amapá', code: 'AMAPA', id: '3' },
      { name: 'Amazonas', code: 'AMAZONAS', id: '4' },
      { name: 'Bahia', code: 'BA', id: '5' },
      { name: 'Ceará', code: 'CEARA', id: '6' },
      { name: 'Espírito Santo', code: 'ESPIRITO_SANTOS', id: '7' },
      { name: 'Goiás', code: 'GOIAS', id: '8' },
      { name: 'Maranhão', code: 'MARANHAO', id: '9' },
      { name: 'Mato Grosso', code: 'MATO_GROSSO', id: '10' },
      { name: 'Mato Grosso do Sul', code: 'MATO_GROSSO_DO_SUL', id: '11' },
      { name: 'Minas Gerais', code: 'MINAS_GERAIS', id: '12' },
      { name: 'Pará', code: 'PARA', id: '13' },
      { name: 'Paraíba', code: 'PARAIBA', id: '14' },
      { name: 'Paraná', code: 'PARANA', id: '15' },
      { name: 'Pernambuco', code: 'PERNAMBUCO', id: '16' },
      { name: 'Piauí', code: 'PIAUI', id: '17' },
      { name: 'Rio de Janeiro', code: 'RIO_DE_JANEIRO', id: '18' },
      { name: 'Rio Grande do Norte', code: 'RIO_GRANDE_DO_NORTE', id: '19' },
      { name: 'Rio Grande do Sul', code: 'RIO_GRANDE_DO_SUL', id: '20' },
      { name: 'Rondônia', code: 'RONDÔNIA', id: '21' },
      { name: 'Roraima', code: 'RORAIMA', id: '22' },
      { name: 'Santa Catarina', code: 'SANTA_CATARINA', id: '23' },
      { name: 'São Paulo', code: 'SAO_PAULO', id: '24' },
      { name: 'Sergipe', code: 'SERGIPE', id: '25' },
      { name: 'Tocantins', code: 'TOCANTINS', id: '26' },
      { name: 'Distrito Federal', code: 'DISTRITO_FEDERAL', id: '27' }
    ];
  }

  test() {
    console.log(this.selectedEstadoMoradia.code);
  }
}
