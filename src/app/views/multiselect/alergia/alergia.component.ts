import { AlergiasService } from './../../../services/alergias.service';
import { Alergia } from './../../../models/alergia.model';
import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig, SelectItem, SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-alergia',
  templateUrl: './alergia.component.html',
  styleUrls: ['./alergia.component.css']
})
export class AlergiaComponent implements OnInit {
  alergias: Alergia[];
  alergiasSelecionadas: Alergia[];

  constructor(
    private primengConfig: PrimeNGConfig,
    public alergiasService: AlergiasService
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    this.alergiasService.alergiasBuscarTodos().subscribe(
      (reponse) => {
        this.alergias = reponse;
        //  this.alergias = this.alergias;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
