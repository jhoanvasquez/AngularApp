import { NgModule } from '@angular/core';
import { Tab4Component } from './tab4.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path: 'view', component: Tab4Component},
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
  
})
export class Tab4Routing { }
