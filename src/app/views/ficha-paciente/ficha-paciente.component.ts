import { ContatoDeEmergencia } from './../../models/contatoDeEmergencia.model';
import { Alergia } from './../../models/alergia.model';
import { Doenca } from './../../models/doenca.model';
import { Medicamento } from './../../models/medicamento.model';
import { FichaPacienteDTO } from './../../models/DTO/fichaPaciente.dto';
import { PacienteService } from './../../services/paciente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.component.html',
  styleUrls: ['./ficha-paciente.component.css']
})
export class FichaPacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService) { }

  public fichaPaciente : FichaPacienteDTO;

  public medicamentos: Medicamento[];
  public doencas : Doenca[];
  public alergias : Alergia[];
  public contatoDeEmergencias : ContatoDeEmergencia[];

  ngOnInit(): void {

    let numeroFichaPacienteUrl: string = window.location.href;
    var codigoDoUsuarioUrl = numeroFichaPacienteUrl.split("/ficha-paciente/")[1];

    console.log("VIM DO COMPONENTE  "+codigoDoUsuarioUrl)
    
    this.pacienteService.fichaDoPaciente(codigoDoUsuarioUrl)
    .subscribe(reponse => {
      this.fichaPaciente = reponse;
     
     this.medicamentos = this.fichaPaciente.medicamentos;
     this.doencas = this.fichaPaciente.doencas;
     this.alergias = this.fichaPaciente.alergias;
     this.contatoDeEmergencias = this.fichaPaciente.contatosDeEmergencias;
      
 
      console.log(this.fichaPaciente)
      },
      error => {
        console.log(error);
      });

    }
  }

