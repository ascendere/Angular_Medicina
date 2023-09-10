import { Component } from '@angular/core';

@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.css']
})
export class PizarraComponent {
  imagenUrl: string | null = null;

  abrirDialogoImagen() {
    const url = window.prompt("Ingresa la URL de la imagen:");
    if (url) {
      this.imagenUrl = url;
    }
  }
}
