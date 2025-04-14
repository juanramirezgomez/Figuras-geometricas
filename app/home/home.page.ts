import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CirculoComponent } from 'src/app/circulo/circulo.component';
import { TrianguloComponent } from 'src/app/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, CirculoComponent, TrianguloComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']

  
})
export class HomePage {
  figuraSeleccionada: string = '';
}