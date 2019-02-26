import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FotoGalerijPage } from './foto-galerij.page';

const routes: Routes = [
  {
    path: '',
    component: FotoGalerijPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FotoGalerijPage]
})
export class FotoGalerijPageModule {}
