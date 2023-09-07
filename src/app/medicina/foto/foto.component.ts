import { Component } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {
  cargarFoto(event: any) {
    const foto = event.target.files[0];
    // Lógica para cargar la foto
  }
}
