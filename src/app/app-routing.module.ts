import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioDiscoComponent } from './pages/formulario-disco/formulario-disco.component';
import { VistaComponent } from './pages/vista/vista.component';

const routes: Routes = [
  {path:"vista",component:VistaComponent},
  {path:"formulario-disco",component:FormularioDiscoComponent},//click
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
