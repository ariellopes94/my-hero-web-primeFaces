import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leitor-qr-code',
  templateUrl: './leitor-qr-code.component.html',
  styleUrls: ['./leitor-qr-code.component.css']
})
export class LeitorQrCodeComponent implements OnInit {

  valueQrcode:string;
  qrResultString: string;
  constructor() { }

  ngOnInit(): void {
  }

  
  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }
}
