import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FietsmarktPage } from './fietsmarkt.page';

const routes: Routes = [
  {
    path: '',
    component: FietsmarktPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FietsmarktPage]
})
export class FietsmarktPageModule {}
