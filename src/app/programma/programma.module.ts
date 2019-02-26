import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgrammaPage } from './programma.page';

const routes: Routes = [
  {
    path: '',
    component: ProgrammaPage,
    children: [
      {
        path: 'Zuid',
        children: [
          {
            path: '',
            loadChildren: './zuid/zuid.module#ZuidPageModule'
          }
        ]
      },
      {
        path: 'Run',
        children: [
          {
            path: '',
            loadChildren: './run/run.module#RunPageModule'
          }
        ]
      },
      {
        path: 'Noord',
        children: [
          {
            path: '',
            loadChildren: './noord/noord.module#NoordPageModule'
          }
        ]
      },
      {
        path: 'Fietsmarkt',
        children: [
          {
            path: '',
            loadChildren: './fietsmarkt/fietsmarkt.module#FietsmarktPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'Zuid',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'Zuid',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgrammaPage]
})
export class ProgrammaPageModule {}
