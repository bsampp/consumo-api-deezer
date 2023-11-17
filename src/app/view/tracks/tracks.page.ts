import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DeezerapiService } from 'src/app/model/services/deezerapi.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
})
export class TracksPage implements OnInit {
  searchTrack: string = '';
  tracks$!: Observable<any>;

  constructor(private deezerApi: DeezerapiService) {}

  ngOnInit() {}

  search() {
    try{
      this.tracks$ = this.deezerApi.getAllTracks(this.searchTrack).pipe(
        map((response: any) => {
          return response.data;
        })
      );    
    }catch(error){
      console.log(error)
    }
  }
}

