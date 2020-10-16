import { Medicamento } from './../../../models/medicamento.model';
import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from './../../../services/medicamentos.service';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {
  medicamentos: Medicamento[];
  medicamentosSelecionados: Medicamento[];

  constructor(public medicamentosService: MedicamentosService) {}

  ngOnInit(): void {
    this.medicamentosService.medicamentosBuscarTodos().subscribe(
      (reponse) => {
        this.medicamentos = reponse;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
