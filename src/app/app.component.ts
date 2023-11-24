import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponenteFilhoComponent } from "./components/componente-filho/componente-filho.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ComponenteFilhoComponent]
})
export class AppComponent {
  title = 'projeto-senai';
}
