import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-filho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.css'
})
export class ComponenteFilhoComponent {
  nome: string = "Josilene dos Santos Dias";
  idade: number = 25;
  hobbies = ["Comer", "Pilotar", "Viajar", "Dormir"];
}
