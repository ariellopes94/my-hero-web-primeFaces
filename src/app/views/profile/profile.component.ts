import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cpf: string;

  constructor( public storage: StorageService) { }

  ngOnInit(): void {

    let localUser =  this.storage.getLocalUser();

    if(localUser && localUser.cpf){
      this.cpf = localUser.cpf;
    }
  }

}
