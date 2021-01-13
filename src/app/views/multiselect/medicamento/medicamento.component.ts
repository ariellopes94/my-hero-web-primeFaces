import { Medicamento } from './../../../models/medicamento.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MedicamentosService } from './../../../services/medicamentos.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {
  @Output() medicamentoSelectOutput = new EventEmitter();

  @Input() medicamentosInput: Array<any>;

  medicamentos: Medicamento[];
  medicamentosSelecionados: Medicamento[];

  constructor(public medicamentosService: MedicamentosService) {}

  ngOnInit(): void {

    
    this.medicamentosSelecionados = this.medicamentosInput;
    
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
