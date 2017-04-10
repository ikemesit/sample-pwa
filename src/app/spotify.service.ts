import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private baseUrl: string = "https://api.spotify.com/v1/";

  constructor(private _http: Http) { }
  //https://api.spotify.com/v1/search?q=tania%20bowra&type=artist
  search(): Observable<any> {
    return this._http.get(this.baseUrl + 'search?q=Nirvana&type=artist')
      .map(data => { return data.json(); });
  }

  // https://api.spotify.com/v1/artists/{id}/top-tracks
  getTracks(id: any): Observable<any> {
    return this._http.get(`${this.baseUrl}artists/${id}/top-tracks?country=US`)
      .map(data => {
        return data.json();
      });
  }

}
