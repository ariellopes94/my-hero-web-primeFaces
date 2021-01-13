import { Doenca } from './../../../models/doenca.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { DoencasService } from './../../../services/doencas.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doenca',
  templateUrl: './doenca.component.html',
  styleUrls: ['./doenca.component.css']
})
export class DoencaComponent implements OnInit {

  @Output() doencaSelectOutput =  new EventEmitter();
  
  @Input() doencasInput: Array<any>;

  doencas: Doenca[];
  doencasSelecionadas: Doenca[];

  constructor(public doencasService: DoencasService) {}

  ngOnInit(): void {

    this.doencasSelecionadas = this.doencasInput;
    
    this.doencasService.doencasBuscarTodos().subscribe(
      (reponse) => {
        this.doencas = reponse;
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
