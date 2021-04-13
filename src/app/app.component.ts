import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto: string = 'ciudad de Madrid'
  id: any = 1;
  fecha: object = new Date();
  importe: number = 5765765554.6564646;
  actor: object = {
    nombre: 'Robert',
    apellidos: 'De Niro'
  }
  numeroDecimales: number = 2;

  ngOnInit() {
    this.id = '000' + this.id;
  }

  setNumeroDecimales(e: number) {
    if (this.numeroDecimales + e >= 0) {
      this.numeroDecimales += e;
    }
  }

}
