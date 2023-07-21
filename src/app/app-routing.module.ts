import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContComponent } from './medicina/cont/cont.component';
import { GlosarioComponent } from './medicina/glosario/glosario.component';
import { MainPageComponent } from './medicina/home/main-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'cont', component: ContComponent},
  { path: 'glosario', component: GlosarioComponent}
];

@NgModule({

imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
