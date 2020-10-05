import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leitor-qr-code',
  templateUrl: './leitor-qr-code.component.html',
  styleUrls: ['./leitor-qr-code.component.css'],
 
})
export class LeitorQrCodeComponent implements OnInit {

  valueQrcode: string;
  qrResultString: string;

  //model
  displayModal: boolean;
  displayModalQrcode:boolean;



  constructor(private router: Router) { }

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
    console.log("VEIOOO")
  }

  showModalDialogQrCodeLido() {
    this.displayModalQrcode = true;
  }
  
  abrir(){
    window.open(this.qrResultString);
  }

  navigateToLogin(): void{
    this.router.navigate(['/']);
  }
  
  testMenu() {
   console.log("dsads")
  }


}
