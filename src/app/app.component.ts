import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano-App';

  aplicarSonido(numero:number): void {
    const audio = new Audio(`../assets/sonidos/note${numero}.wav`);
    audio.load();
    audio.play();
  }
}
