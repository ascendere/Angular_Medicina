import { Component } from '@angular/core';

@Component({
  selector: 'app-cont2',
  templateUrl: './cont2.component.html',
  styleUrls: ['./cont2.component.css']
})
export class Cont2Component {
  imagenUrl: string | null = null;

  abrirDialogoImagen() {
    const url = window.prompt("Ingresa la URL de la imagen:");
    if (url) {
      this.imagenUrl = url;
    }
  }
}
