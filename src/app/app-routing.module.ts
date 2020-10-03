import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteFichaComponent } from './views/paciente-ficha/paciente-ficha.component';

const routes: Routes = [{

  path: "" ,
  component: LoginComponent,
 },
 {
  path: "ficha-paciente" ,
  component: PacienteFichaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
