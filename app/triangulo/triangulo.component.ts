import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrianguloEscaleno } from '../../models/figuras';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule ]
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  resultado: number | null = null;

  calcularPerimetro() {
    const figura = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.resultado = figura.calcularPerimetro();
  }
}