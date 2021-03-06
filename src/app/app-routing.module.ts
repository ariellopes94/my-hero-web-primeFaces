import { FichaPacienteComponent } from './views/ficha-paciente/ficha-paciente.component';
import { CartaoQrCodeComponent } from './views/cartao-qr-code/cartao-qr-code.component';
import { ProfileComponent } from './views/profile/profile.component';
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
    path: 'cartao-qr-code',
    component:CartaoQrCodeComponent
  },
  {
    path: "ficha-paciente/:codigoPaciente" ,
    component: FichaPacienteComponent
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
  },
  {
    path: 'paciente-logado',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
