import { PacienteCadastroComponent } from './views/paciente-cadastro/paciente-cadastro.component';
import { LeitorQrCodeComponent } from './views/leitor-qr-code/leitor-qr-code.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteFichaComponent } from './views/paciente-ficha/paciente-ficha.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'ficha-paciente',
    component: PacienteFichaComponent
  },
  {
    path: 'leitor-qr-code',
    component: LeitorQrCodeComponent
  },
  {
    path: 'paciente-cadastro',
    component: PacienteCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
