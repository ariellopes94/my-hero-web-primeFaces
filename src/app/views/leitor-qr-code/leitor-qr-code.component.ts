import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leitor-qr-code',
  templateUrl: './leitor-qr-code.component.html',
  styleUrls: ['./leitor-qr-code.component.css']
})
export class LeitorQrCodeComponent implements OnInit {
  valueQrcode: string;
  qrResultString: string;

  // model
  displayModal = false;
  displayModalQrcode = false;
  botaoIrAteWebSite = true;

  subtraindoString: string;
  alterarConformeSiteOuTexo = 'Website';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.displayModal = true;
  }

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString.trim();
    this.displayModalQrcode = true;
    this.subtraindoString = this.qrResultString.substring(0, 4);

    if (!(this.subtraindoString == 'http' || this.subtraindoString == 'www.')) {
      this.alterarConformeSiteOuTexo = 'Texto';
      this.botaoIrAteWebSite = false;
    }
  }

  showModalDialog() {
    this.displayModal = true;
  }

  showModalDialogQrCodeLido() {
    this.displayModalQrcode = true;
  }

  abrir() {
    window.open(this.qrResultString);
  }

  navigateToLogin(): void {
    this.router.navigate(['/']);
  }

  testMenu() {
    console.log('dsads');
  }
}
