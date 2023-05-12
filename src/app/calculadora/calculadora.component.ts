import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  @Output() resultadoEmit = new EventEmitter<number>();
  num1 :number;
  num2 :number;
  

  sumar() {
    let resultado = this.num1 + this.num2;
    this.resultadoEmit.emit(resultado);
  }
  multi() {
    let resultado = this.num1 * this.num2;
    this.resultadoEmit.emit(resultado);
  }
  div() {
    let resultado = this.num1 / this.num2;
    this.resultadoEmit.emit(resultado);
  }
  restar() {
    let resultado = this.num1 - this.num2;
    this.resultadoEmit.emit(resultado);
  }
}
