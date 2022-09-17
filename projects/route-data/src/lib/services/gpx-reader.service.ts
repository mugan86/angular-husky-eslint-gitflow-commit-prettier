import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import gpxParser from 'gpxparser';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
  providedIn: 'root',
})
export class GpxReaderService {
  constructor(private http: HttpClient) {}

  getGpxData(url: string): Observable<gpxParser> {
    return this.http.get(url, { responseType: 'text' }).pipe(
      map((data) => {
        const gpx = new gpxParser(); //Create gpxParser Object
        gpx.parse(data); //parse gpx file from string data
        return gpx;
      })
    );
  }
}
