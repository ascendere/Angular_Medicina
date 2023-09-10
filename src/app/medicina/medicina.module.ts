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
import { Contenido2Component } from './contenido2/contenido2.component';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { Cont2Component } from './cont2/cont2.component';
import { VideoComponent } from './video/video.component';
import { FotoComponent } from './foto/foto.component';
import { GlosarioAbdomenComponent } from './glosario-abdomen/glosario-abdomen.component';
import { GlosarioBrazoComponent } from './glosario-brazo/glosario-brazo.component';
import { PizarraComponent } from './pizarra/pizarra.component';
import { LoginComponent } from './login/login.component';


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
    Contenido2Component,
    Cont2Component,
    VideoComponent,
    FotoComponent,
    Contenido2Component,
    GlosarioAbdomenComponent,
    GlosarioBrazoComponent,
    PizarraComponent,
    LoginComponent
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
