import { AlergiasService } from './../../../services/alergias.service';
import { Alergia } from './../../../models/alergia.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PrimeNGConfig, SelectItem, SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-alergia',
  templateUrl: './alergia.component.html',
  styleUrls: ['./alergia.component.css']
})
export class AlergiaComponent implements OnInit {

  @Output() alergiaSelectOutput = new EventEmitter();

  @Input() alergiasInput: Array<any>;

  alergias: Alergia[];
  alergiasSelecionadas: Alergia[];

  constructor(
    private primengConfig: PrimeNGConfig,
    public alergiasService: AlergiasService
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    console.log("veio aqui")
    this.alergiasSelecionadas = this.alergiasInput;
    
    this.alergiasService.alergiasBuscarTodos().subscribe(
      (reponse) => {
        this.alergias = reponse;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  funcaoAlergias(alergia: any):void {
    this.alergiaSelectOutput.emit(this.alergiasSelecionadas)
  }
}
