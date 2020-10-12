import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { PacienteCadastroComponent } from './views/paciente-cadastro/paciente-cadastro.component';
import { LeitorQrCodeComponent } from './views/leitor-qr-code/leitor-qr-code.component';

//PrimeFaces
import { StepsModule } from 'primeng/steps';
import { PacienteFichaComponent } from './views/paciente-ficha/paciente-ficha.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';

//Leitor qr code
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacienteCadastroComponent,
    PacienteFichaComponent,
    LeitorQrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    StepsModule,
    ButtonModule,
    CardModule,
    RippleModule,
    InputTextModule,
    InputMaskModule,
    ZXingScannerModule,
    HttpClientModule,
    DialogModule,
    SidebarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
