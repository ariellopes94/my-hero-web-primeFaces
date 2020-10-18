import { Medicamento } from './../../../models/medicamento.model';
import { Component, OnInit, Output } from '@angular/core';
import { MedicamentosService } from './../../../services/medicamentos.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {
  @Output() medicamentoSelectOutput = new EventEmitter();
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

  funcaoMedicamentoOutput(medicamentos: any):void {
    this.medicamentoSelectOutput.emit(this.medicamentosSelecionados)
  }
}
