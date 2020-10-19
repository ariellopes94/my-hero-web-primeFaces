import { PacienteService } from './../../services/paciente.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { PacienteProfileDTO } from 'src/app/models/DTO/paciente_profile.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  paciente : PacienteProfileDTO;


  constructor( public storage: StorageService,
               public pacienteService: PacienteService) { }

  ngOnInit(): void {

    let localUser =  this.storage.getLocalUser();


    if(localUser && localUser.cpf){
      this.pacienteService.findByCpf(localUser.cpf)
          .subscribe(response => {
            this.paciente = response;
            //BuscarImage
          },
          error => {});
   }
    }
  
}
