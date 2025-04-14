import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class CirculoComponent {
  radio: number = 0;
  resultado: number | null = null;

  calcularPerimetro() {
    this.resultado = 2 * Math.PI * this.radio;
  }
}