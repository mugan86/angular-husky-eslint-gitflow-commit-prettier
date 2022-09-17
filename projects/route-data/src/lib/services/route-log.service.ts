import { Injectable } from '@angular/core';
import GpxParser from 'gpxparser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { GpxReaderService } from './gpx-reader.service';

@Injectable({
  providedIn: 'root',
})
export class RouteLogService {
  constructor(private gpxReaderService: GpxReaderService) {}

  getPointsFromUrl(url: string): Observable<any> {
    return this.gpxReaderService
      .getGpxData(url)
      .pipe(map((gpxParser) => gpxParser.tracks[0].points));
  }
}
