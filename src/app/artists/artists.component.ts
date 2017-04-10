import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  providers: [SpotifyService]
})
export class ArtistsComponent implements OnInit {
  public artistslist: any[];
  public popularTracks: any[];
  public trackArtistId: any;
  // public artistBlock: any = {
  //   state: 'out'
  // }

  constructor(private _spotify: SpotifyService) { }

  ngOnInit() {
    this._spotify.search().subscribe(data => {
      this.artistslist = data.artists.items;
      // console.log(this.artistslist);
    });
  }

  showArtistTracks(id: any) {
    this._spotify.getTracks(id).subscribe(data => {
      this.popularTracks = data.tracks;
      if (this.trackArtistId && this.trackArtistId === id) {
        this.trackArtistId = null;
        // this.artistBlock.state = 'out';
      } else {
        this.trackArtistId = this.popularTracks[0].artists[0].id;
        // this.artistBlock.state = 'in';
      }

      // console.log(this.popularTracks);
    });
  }

}
