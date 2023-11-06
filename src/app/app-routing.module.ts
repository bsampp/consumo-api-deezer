import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tracks',
    pathMatch: 'full'
  },
  {
    path: 'tracks',
    loadChildren: () => import('./view/tracks/tracks.module').then( m => m.TracksPageModule)
  },
  {
    path: 'track-details/:id',
    loadChildren: () => import('./view/track-details/track-details.module').then( m => m.TrackDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
