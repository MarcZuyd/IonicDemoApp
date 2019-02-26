import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamDeelnamePage } from './team-deelname.page';

const routes: Routes = [
  {
    path: '',
    component: TeamDeelnamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamDeelnamePage]
})
export class TeamDeelnamePageModule {}
