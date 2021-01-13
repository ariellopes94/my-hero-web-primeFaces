import { StorageService } from './../../services/storage.service';
import { PacienteService } from './../../services/paciente.service';
import { CartaoQrCode } from './../../models/DTO/cartaoQrCode.dto';
import { Component, OnInit } from '@angular/core';


import { PdfMakeWrapper, Img , QR , Columns }  from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";

@Component({
  selector: 'app-cartao-qr-code',
  templateUrl: './cartao-qr-code.component.html',
  styleUrls: ['./cartao-qr-code.component.css']
})
export class CartaoQrCodeComponent implements OnInit {

  public cartaoQrCode : CartaoQrCode;

  private red: string = '#f80303';
  private codigoDoPaciente : string = "0544ddwd-fdsd";

  constructor(public pacienteService: PacienteService,
              public storage: StorageService) { 
    
  }

  ngOnInit(): void {

    let localUser =  this.storage.getLocalUser();

    console.log(localUser.cpf)

    this.pacienteService.gerarQrCode(localUser?.cpf)
    .subscribe(reponse => {
      this.cartaoQrCode = reponse;
     
     
 
      console.log(this.cartaoQrCode)
      },
      error => {
        console.log(error);
      });
  }

  async gerarPDF(){

    
    const pdf = new PdfMakeWrapper();

    

/// CAMINHO  = assets/qr.png
    

/*
pdf.add( await new Img('assets/herder.jpg').build() );


//IMAGREM BASE 64
//pdf.add( await new Img(this.imageBase64).build() );

pdf.add( await new Img('assets/qr.png').build() );

pdf.add( await new Img('assets/folder.jpg').build() );
*/
//
pdf.pageSize('A4');

PdfMakeWrapper.setFonts(pdfFonts);

pdf.add( await new Img('assets/logoFrente.png').fit([250,250]).alignment('center').build() ); //fit([50,150]) ADICIONAR TAMANHO DA IMAGEM




pdf.add( await new Img('assets/header.png').alignment('center').build() );

pdf.add(
  pdf.ln(1)
);

pdf.add(
  new QR(`https://myheroapp.com.br/ficha-paciente/${this.cartaoQrCode.codigoGeradoPeloSistema}`).fit(100).alignment('center').end
)

pdf.add(
  pdf.ln(1)
);

pdf.add(
  new Columns([ this.cartaoQrCode.nome ]).columnGap(10).alignment('center').fontSize(12)
                .bold().color(this.red).end
  );
  pdf.add(
    new Columns([ this.cartaoQrCode.sexo ]).columnGap(10).alignment('center').fontSize(10).bold().end
    );



pdf.add( await new Img('assets/baixoCartao.png').alignment('center').build() );


//pdf.add(
  //new Columns([ 'Masculino' ]).columnGap(10).alignment('center').fontSize(10).bold().background(this.blue).end
 // );
/*
pdf.add( 
  new Txt('Hello world!').alignment('center').color(this.blue).end
);
*/



/* PULAR LINHAA
pdf.add(
  pdf.ln(100)
);
*/

//pdf.userPassword('123'); SENHA PARA ABRIR O PDF

pdf.create().download();
pdf.create().open();

  
   // pdf.create().download(); BAIXAR DIRETO
    
  }
  
}
