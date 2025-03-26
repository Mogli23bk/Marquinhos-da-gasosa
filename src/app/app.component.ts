import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostoComponent } from './posto/posto.component';

@Component({
  selector: 'app-root',
  standalone: true, // Define o componente como standalone
  imports: [CommonModule, RouterOutlet, PostoComponent], // Importa o PostoComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'posto-combustivel';
}