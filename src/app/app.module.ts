import { TipoSaquinioSelectComponent } from './views/selects/tipo-saquinio-select/tipo-saquinio-select.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { PacienteCadastroComponent } from './views/paciente-cadastro/paciente-cadastro.component';
import { LeitorQrCodeComponent } from './views/leitor-qr-code/leitor-qr-code.component';
import { PacienteFichaComponent } from './views/paciente-ficha/paciente-ficha.component';

//PrimeFaces
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { MultiSelectModule } from 'primeng/multiselect';
import { AccordionModule } from 'primeng/accordion';
import { OrderListModule } from 'primeng/orderlist';
import { TableModule } from 'primeng/table';
import { BlockUIModule } from 'primeng/blockui';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';

//Leitor qr code
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AlergiaComponent } from './views/multiselect/alergia/alergia.component';
import { DoencaComponent } from './views/multiselect/doenca/doenca.component';
import { MedicamentoComponent } from './views/multiselect/medicamento/medicamento.component';
import { TelefoneDeContatosComponent } from './views/telefone-de-contatos/telefone-de-contatos.component';
import { EstadoDeMoradiaComponent } from './views/selects/estado-de-moradia/estado-de-moradia.component';
import { UsuarioLogadoComponent } from './views/usuario-logado/usuario-logado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacienteCadastroComponent,
    PacienteFichaComponent,
    LeitorQrCodeComponent,
    AlergiaComponent,
    DoencaComponent,
    MedicamentoComponent,
    TelefoneDeContatosComponent,
    TipoSaquinioSelectComponent,
    EstadoDeMoradiaComponent,
    UsuarioLogadoComponent
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
    MultiSelectModule,
    AccordionModule,
    OrderListModule,
    TableModule,
    BlockUIModule,
    ConfirmDialogModule,
    MessagesModule,
    DropdownModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
