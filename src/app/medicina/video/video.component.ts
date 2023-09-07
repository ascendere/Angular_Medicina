import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  cargarVideo(event: any) {
    const video = event.target.files[0];
    // Lógica para cargar el video
  }
}
