import { Component } from '@angular/core';

interface Glosario {
  [key: string]: string[];
}

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.css']
})
export class GlosarioComponent {
  glosario: Glosario = {
    'A': ['Abdomen', 'Axila', 'Anatomía'],
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
