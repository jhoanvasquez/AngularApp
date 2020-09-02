import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Tab4Component } from './tab4.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab4Routing } from './tab4-routing.module';


@NgModule({
  declarations: [Tab4Component],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab4Component }]),
    Tab4Routing
    
  ]
})
export class Tab4Module { }
