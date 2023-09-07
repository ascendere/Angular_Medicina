import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { MainPageComponent } from './home/main-page.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ContComponent } from './cont/cont.component';
import { GlosarioComponent } from './glosario/glosario.component';
import { Cont1Component } from './cont1/cont1.component';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { Cont2Component } from './cont2/cont2.component';
import { VideoComponent } from './video/video.component';
import { FotoComponent } from './foto/foto.component';


@NgModule({
  declarations:[
    MainPageComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    ContenidoComponent,
    ContComponent,
    GlosarioComponent,
    Cont1Component,
    Cont2Component,
    VideoComponent,
    FotoComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports:[
    CommonModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
  ]
})
export class MedicinaModule { }
