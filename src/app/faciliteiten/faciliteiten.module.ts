import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FaciliteitenPage } from './faciliteiten.page';

const routes: Routes = [
  {
    path: '',
    component: FaciliteitenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaciliteitenPage]
})
export class FaciliteitenPageModule {}
