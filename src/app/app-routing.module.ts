import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosHipotecariosComponent } from './creditos-hipotecarios/creditos-hipotecarios.component';

const routes: Routes = [
  { path: 'creditos-hipotecarios', component: CreditosHipotecariosComponent },
  { path: '', redirectTo: '/creditos-hipotecarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
