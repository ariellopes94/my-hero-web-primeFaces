import { Doenca } from './../../../models/doenca.model';
import { Component, OnInit } from '@angular/core';
import { DoencasService } from './../../../services/doencas.service';

@Component({
  selector: 'app-doenca',
  templateUrl: './doenca.component.html',
  styleUrls: ['./doenca.component.css']
})
export class DoencaComponent implements OnInit {
  doencas: Doenca[];
  doencasSelecionadas: Doenca[];

  constructor(public dencasService: DoencasService) {}

  ngOnInit(): void {
    this.dencasService.doencasBuscarTodos().subscribe(
      (reponse) => {
        this.doencas = reponse;
        //  this.alergias = this.alergias;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
