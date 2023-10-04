import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-multi',
  templateUrl: './opera-multi.component.html',
  styleUrls: ['./opera-multi.component.css']
})
export class OperaMultiComponent {
  numero: number = 0;
  veces: number = 0;
  resultadoOperacion: string = '';
  resultadoSuma: number = 0;

  calcular() {
    this.resultadoOperacion = '';
    this.resultadoSuma = 0;

    for (let i = 0; i < this.veces; i++) {
      this.resultadoSuma += this.numero;
      this.resultadoOperacion += this.numero.toString();  
      if (i < this.veces - 1) {
        this.resultadoOperacion += ' + ';
      }
    }
  }
}
