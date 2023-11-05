import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'songs',
    loadChildren: () => import('./view/songs/songs.module').then( m => m.SongsPageModule)
  },
  {
    path: 'song-details',
    loadChildren: () => import('./view/song-details/song-details.module').then( m => m.SongDetailsPageModule)
  },
  {
    path: 'tracks',
    loadChildren: () => import('./view/tracks/tracks.module').then( m => m.TracksPageModule)
  },
  {
    path: 'track-details',
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
