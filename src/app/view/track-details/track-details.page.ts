import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeezerapiService } from 'src/app/model/services/deezerapi.service';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.page.html',
  styleUrls: ['./track-details.page.scss'],
})
export class TrackDetailsPage implements OnInit {

  info: any;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  constructor(private actRoute : ActivatedRoute, private deezerApi: DeezerapiService) { }

  ngOnInit() {
    let id  = this.actRoute.snapshot.paramMap.get('id');
    this.deezerApi.getTrackDetails(id).subscribe(result => {
      this.info=result
      this.info.durationInMinutes = this.convertSecondsToMinutes(this.info.duration);
    });
  }

  convertSecondsToMinutes(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  playPreview() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (this.info && this.info.preview) {
      audioElement.src = this.info.preview;

      audioElement.play();
    }
  }

}
