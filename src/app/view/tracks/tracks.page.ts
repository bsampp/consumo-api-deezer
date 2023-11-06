import { Component, OnInit } from '@angular/core';
import { DeezerapiService } from 'src/app/model/services/deezerapi.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
})
export class TracksPage implements OnInit {
  tracks: any[] = [];
  searchTrack: string = '';

  constructor(private deezerApi: DeezerapiService) {}

  ngOnInit() {}

  search() {
    this.deezerApi.getAllTracks(this.searchTrack).subscribe((response: any) => {
      this.tracks = response.data; // Use a estrutura real da resposta
    }, (error: any) => {
      console.error(error);
    });
  }
}
