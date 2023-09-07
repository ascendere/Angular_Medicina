import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContComponent } from './medicina/cont/cont.component';
import { GlosarioComponent } from './medicina/glosario/glosario.component';
import { MainPageComponent } from './medicina/home/main-page.component';
import { Cont2Component } from './medicina/cont2/cont2.component';


const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'cont', component: ContComponent},
  { path: 'glosario', component: GlosarioComponent},
  { path: 'cont2', component: Cont2Component},
  { path: '**', redirectTo: '/' }

];

@NgModule({

imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
