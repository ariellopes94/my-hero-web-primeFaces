import { Doenca } from './../../../models/doenca.model';
import { Component, OnInit, Output } from '@angular/core';
import { DoencasService } from './../../../services/doencas.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doenca',
  templateUrl: './doenca.component.html',
  styleUrls: ['./doenca.component.css']
})
export class DoencaComponent implements OnInit {
  @Output() doencaSelectOutput =  new EventEmitter();
  doencas: Doenca[];
  doencasSelecionadas: Doenca[];

  constructor(public doencasService: DoencasService) {}

  ngOnInit(): void {
    this.doencasService.doencasBuscarTodos().subscribe(
      (reponse) => {
        this.doencas = reponse;
        //  this.alergias = this.alergias;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  funcaoDoencas(doenca: any):void {
    this.doencaSelectOutput.emit(this.doencasSelecionadas)
  }
}
