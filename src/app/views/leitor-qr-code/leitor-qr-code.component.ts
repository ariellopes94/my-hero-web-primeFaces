import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leitor-qr-code',
  templateUrl: './leitor-qr-code.component.html',
  styleUrls: ['./leitor-qr-code.component.css'],
 
})
export class LeitorQrCodeComponent implements OnInit {

  valueQrcode:string;
  qrResultString: string;

  //model
  displayModal: boolean;
  displayModalQrcode:boolean;



  constructor() { }

  ngOnInit(): void {
    this.showModalDialog();
  }

  
  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;

    this.displayModalQrcode = true;
  }

  showModalDialog() {
    this.displayModal = true;
  }

  showModalDialogQrCodeLido() {
    this.displayModalQrcode = true;
  }
  
  
}
