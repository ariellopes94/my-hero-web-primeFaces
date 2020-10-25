import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Alergia } from './../../models/alergia.model';
import { PacienteService } from './../../services/paciente.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { PacienteProfileDTO } from 'src/app/models/DTO/paciente_profile.dto';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  paciente : PacienteProfileDTO;
  items: MenuItem[];


  constructor( public storage: StorageService,
               public pacienteService: PacienteService,
               private authService: AuthService,
               private router: Router) { }

  ngOnInit(): void {

    let localUser =  this.storage.getLocalUser();


   // if(localUser && localUser.cpf){ pARA ELE BUSCAR O CPF
      this.pacienteService.findByCpf(localUser?.cpf)
          .subscribe(response => {
            this.paciente = response;

            //BuscarImage
          },
          error => {});
 //  }

    this.items = [
      {
          label:'File',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-plus',
                  items:[
                  {
                      label:'Bookmark',
                      icon:'pi pi-fw pi-bookmark'
                  },
                  {
                      label:'Video',
                      icon:'pi pi-fw pi-video'
                  },

                  ]
              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-trash'
              },
              {
                  separator:true
              },
              {
                  label:'Export',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label:'Users',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-user-minus',

              },
              {
                  label:'Search',
                  icon:'pi pi-fw pi-users',
                  items:[
                  {
                      label:'Filter',
                      icon:'pi pi-fw pi-filter',
                      items:[
                          {
                              label:'Print',
                              icon:'pi pi-fw pi-print'
                          }
                      ]
                  },
                  {
                      icon:'pi pi-fw pi-bars',
                      label:'List'
                  }
                  ]
              }
          ]
      },
      {
          label:'Events',
          icon:'pi pi-fw pi-calendar',
          items:[
              {
                  label:'Edit',
                  icon:'pi pi-fw pi-pencil',
                  items:[
                  {
                      label:'Save',
                      icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-calendar-minus'
                  },

                  ]
              },
              {
                  label:'Archieve',
                  icon:'pi pi-fw pi-calendar-times',
                  items:[
                  {
                      label:'Remove',
                      icon:'pi pi-fw pi-calendar-minus'
                  }
                  ]
              }
          ]
      },
      {
          label:'Logout',
          icon:'pi pi-fw pi-power-off',
          command: (event) => {
            this.logout()
          }
      }
  ];

    }

    logout(){
       this.authService.logout();
       this.router.navigate(['']);
    }
  
}
