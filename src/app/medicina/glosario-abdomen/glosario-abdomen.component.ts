import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface GlosarioAbdomen {
  [key: string]: string[];
}
@Component({
  selector: 'app-glosario-abdomen',
  templateUrl: './glosario-abdomen.component.html',
  styleUrls: ['./glosario-abdomen.component.css']
})
export class GlosarioAbdomenComponent implements OnInit {
  termino: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.termino = params.get('termino') || '';
      // Aquí puedes usar this.termino para mostrar la información correspondiente al término
    });
  }
  glosario: GlosarioAbdomen = {
    'A': ['Abdomen', 'Antebrazo', 'Articulaciones', 'Axila', 'Anatomía'],
    'B': ['Brazo', 'Boca', 'Biología'],
    'C': ['Cabeza', 'Cuello', 'Corazón'],
    // Agrega más letras y palabras según tu glosario
  };
  seleccionActual: string = 'A'; // Letra inicial seleccionada
  informacionLetra: string[] = this.glosario[this.seleccionActual]; // Información de la letra seleccionada


  seleccionarLetra(letra: string) {
    this.seleccionActual = letra;
  }



  obtenerInformacionLetra(): string[] {
    console.log(this.glosario[this.seleccionActual])
    return this.glosario[this.seleccionActual] || [];

  }

  slideChanged(event: Event) {
    const target = event.target as HTMLDivElement;
    const letraSeleccionada = target.querySelector('.carousel-body')?.textContent?.trim() || '';
    this.seleccionActual = letraSeleccionada;
  }
  obtenerIndiceSlide(): number {
    const letras = Object.keys(this.glosario);
    return letras.indexOf(this.seleccionActual);
  }


  cambiarLetraAnterior() {
    const letras = Object.keys(this.glosario);
    const indexActual = letras.indexOf(this.seleccionActual);
    const indiceAnterior = (indexActual - 1 + letras.length) % letras.length;
    this.seleccionActual = letras[indiceAnterior];
  }

  cambiarLetraSiguiente() {
    const letras = Object.keys(this.glosario);
    const indexActual = letras.indexOf(this.seleccionActual);
    const indiceSiguiente = (indexActual + 1) % letras.length;
    this.seleccionActual = letras[indiceSiguiente];
  }

  searchText: any;
  onSearchChange() {
    console.log(this.searchText);
    // Aquí puedes manejar la entrada del usuario
    // Por ejemplo, puedes realizar una solicitud HTTP para buscar los datos
  }

}
