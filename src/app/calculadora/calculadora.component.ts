import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1=0
  num2=0
  resultado=0

  sumar(){

    this.resultado= this.num1+this.num2;

  }
  multi(){

    this.resultado= this.num1*this.num2;

  }
  div(){

    this.resultado= this.num1/this.num2;

  }
  restar(){

    this.resultado= this.num1-this.num2;

  }

}
