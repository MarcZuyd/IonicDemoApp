import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'programma', loadChildren: './programma/programma.module#ProgrammaPageModule' },
  { path: 'routes-info', loadChildren: './routes-info/routes-info.module#RoutesInfoPageModule' },
  { path: 'faciliteiten', loadChildren: './faciliteiten/faciliteiten.module#FaciliteitenPageModule' },
  { path: 'team-deelname', loadChildren: './team-deelname/team-deelname.module#TeamDeelnamePageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FAQPageModule' },
  { path: 'organisatie', loadChildren: './organisatie/organisatie.module#OrganisatiePageModule' },
  { path: 'foto-galerij', loadChildren: './foto-galerij/foto-galerij.module#FotoGalerijPageModule' },
  { path: 'zuid', loadChildren: './programma/zuid/zuid.module#ZuidPageModule' },
  { path: 'run', loadChildren: './programma/run/run.module#RunPageModule' },
  { path: 'noord', loadChildren: './programma/noord/noord.module#NoordPageModule' },
  { path: 'fietsmarkt', loadChildren: './programma/fietsmarkt/fietsmarkt.module#FietsmarktPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
