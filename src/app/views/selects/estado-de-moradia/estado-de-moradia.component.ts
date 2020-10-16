import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-de-moradia',
  templateUrl: './estado-de-moradia.component.html',
  styleUrls: ['./estado-de-moradia.component.css']
})
export class EstadoDeMoradiaComponent implements OnInit {
  selectedEstadoMoradia: string;
  estadoDeMoradia: any[];

  constructor() {
    this.estadoDeMoradia = [
      { name: 'Acre', code: 'ACRE', id: '1' },
      { name: 'Alagoas', code: 'ALAGOAS', id: '2' },
      { name: 'Amapá', code: 'AMAPA', id: '3' },
      { name: 'Amazonas', code: 'AMAZONAS', id: '4' },
      { name: 'Espírito Santo', code: 'ESPIRITO_SANTOS' },
      { name: 'Ceará', code: 'CEARA' },
      { name: 'Goiás', code: 'GOIAS' },
      { name: 'Maranhão', code: 'MARANHAO' },
      { name: 'Mato Grosso', code: 'MATO_GROSSO' },
      { name: 'Mato Grosso do Sul', code: 'MATO_GROSSO_DO_SUL' },
      { name: 'Minas Gerais', code: 'MINAS_GERAIS' },
      { name: 'Pará', code: 'PARA' },
      { name: 'Paraíba', code: 'PARAIBA' },
      { name: 'Paraná', code: 'PARANA' },
      { name: 'Pernambuco', code: 'PERNAMBUCO' },
      { name: 'Piauí', code: 'PIAUI' },
      { name: 'Rio de Janeiro', code: 'RIO_DE_JANEIRO' },
      { name: 'Rio Grande do Norte', code: 'RIO_GRANDE_DO_NORTE' },
      { name: 'Rio Grande do Sul', code: 'RIO_GRANDE_DO_SUL' },
      { name: 'Rondônia', code: 'RONDÔNIA' },
      { name: 'Roraima', code: 'RORAIMA' },
      { name: 'Santa Catarina', code: 'SANTA_CATARINA' },
      { name: 'São Paulo', code: 'SAO_PAULO' },
      { name: 'Sergipe', code: 'SERGIPE' },
      { name: 'Tocantins', code: 'TOCANTINS' },
      { name: 'Distrito Federal', code: 'DISTRITO_FEDERAL' }
    ];
  }

  test() {
    console.log(this.selectedEstadoMoradia.code);
  }
  ngOnInit(): void {}
}
