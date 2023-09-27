import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.css']
})
export class TempComponentComponent {

  grado='';
  resultado:number=0;
  opcion:number=0;
  Termino='';

  resultadoOpcion(){
    if(this.opcion == 1) {
      this.resultado=(parseInt(this.grado)*(9/5)) + 32;
      this.Termino='Fahrenheit';
    }
    if(this.opcion == 2) {
      this.resultado=(parseInt(this.grado)-32) * (5/9);
      this.Termino='Celsius';
    }
  }
}
