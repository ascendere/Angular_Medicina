import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContComponent } from './medicina/cont/cont.component';
import { GlosarioComponent } from './medicina/glosario/glosario.component';
import { MainPageComponent } from './medicina/home/main-page.component';
import { Cont2Component } from './medicina/cont2/cont2.component';
import { Contenido2Component } from './medicina/contenido2/contenido2.component';
import { LoginComponent } from './medicina/login/login.component';
import {PizarraComponent } from './medicina/pizarra/pizarra.component';
import { GlosarioAbdomenComponent } from './medicina/glosario-abdomen/glosario-abdomen.component';


const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'cont', component: ContComponent},
  { path: 'glosAbd/:termino', component: GlosarioAbdomenComponent }, // Ruta dinámica para términos de glosario
  { path: 'glosario', component: GlosarioComponent},
  { path: 'cont2', component: Cont2Component},
  { path: 'pizarra', component: PizarraComponent},
  { path: 'conten2', component: Contenido2Component},
  { path: '**', redirectTo: '/' }

];

@NgModule({

imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
