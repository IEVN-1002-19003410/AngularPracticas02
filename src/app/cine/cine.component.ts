import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {

  precio:number=12;
  boletos:string='';
  total:number=0;
  nombre:string='';
  descuento1:number=0;//descuento de 10% por 2 o mas boletos
  descuento2:number=0;//descuento de 15% por 5 o mas boletos
  totalDescuento:number=0;
  descuentocinesco:number=0;//descuento adicional por la tarjeta
  tarjetaseleccionada:string='';//vemos que radio esta activado
  compradores:number=0;//variable para guardar el numero de compradores
  maxboletos:number=0;//variable para calcular cantidad max de boletos 
  error:string='';

  Calcular(){
    this.error='';
    //Obtenemos el maximo de boletos posibles
    this.maxboletos=this.compradores*7;
    
    //Comienzan las operaciones
    //Caso 1 : total de boletos menor a 3 no da descuento
    if(parseInt(this.boletos) <=2 && parseInt(this.boletos) > 0){
      this.total= parseInt(this.boletos) * this.precio;
      this.totalDescuento=this.total;
    }
    //Caso 2: total de boletos mayor a 2 da un descuento del %10
    if(parseInt(this.boletos) > 2 && parseInt(this.boletos)<6 ){
      this.total=parseInt(this.boletos)*this.precio;
      this.descuento1=this.total*0.10;
      this.totalDescuento=this.total-this.descuento1;
    }
    //Caso 3: total boletos mayor a 5 da un descuento adicional de %15 a lo ya descontado
    if(parseInt(this.boletos) > 5 && parseInt(this.boletos)<this.maxboletos+1){
      this.total=parseInt(this.boletos)*this.precio;
      this.descuento2=this.total*0.15;
      this.totalDescuento=this.total-this.descuento2;
    }
    //obtenemos cual radio esta seleccionado para saber si aplicamos otro descuento
    if(this.tarjetaseleccionada=='Si'){
      //aplica descuento adicional del 10% por tarjeta cineco
    this.totalDescuento =this.totalDescuento * 0.90;
    }
    
    //error cuando pasan de la cantidad de boletos maxima 
    if(parseInt(this.boletos)>this.maxboletos){
      this.error='No se pueden comprar más de ' + this.maxboletos + ' ' + 'boletos';
    }
  }
  Limpiar(): void { 
    window.location.reload(); 
  }
}