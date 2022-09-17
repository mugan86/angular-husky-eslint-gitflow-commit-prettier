import { Component, OnInit } from '@angular/core';
import { RouteLogService } from 'projects/route-data/src/lib/services/route-log.service';
enum EDistanceUnit {
  KM = 'KM',
  MILE = 'M',
  NAUTICAL_MILE = 'NM',
}

const MILES_IN_KM = 0.621371192;
const NAUTICAL_MILES_IN_KM = 0.539956803;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHuskyWithGitHooks';
  routeLogUrl =
    'https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/track.gpx';
  constructor(private routeLog: RouteLogService) {}

  ngOnInit(): void {
    console.log('start');

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.routeLog.getPointsFromUrl(this.routeLogUrl).subscribe((points) => {
      console.log(points.length);
      let distanceTotal = 0;
      points.map((point: { lat: string; lon: string }, index: number) => {
        // console.log(point.lat, point.lon);
        console.log();
        if (points.length - 1 === index) {
          console.log('finish point', 'distance: ', distanceTotal, ' kms');
        } else {
          distanceTotal += this._getDistanceFromLatLonInKm(
            point.lat,
            point.lon,
            points[index + 1].lat,
            points[index + 1].lon,
            true
          );
          console.log(this.roundNumber(distanceTotal));
        }
      });
    });
  }

  _getDistanceFromLatLonInKm(
    startLat: string | number,
    startLng: string | number,
    finishLat: string | number,
    finishLng: string | number,
    precise: boolean,
    distanceUnit: EDistanceUnit = EDistanceUnit.KM
  ) {
    var EARTH_RADIUS = 6371; // Radius of the earth in kilometers
    var differenceBetweenLatsInRadians = this.degreeToRad(
      +finishLat - +startLat
    ); // deg2rad below
    var differenceBetweenLngsInRadians = this.degreeToRad(
      +finishLng - +startLng
    );
    var a =
      Math.sin(differenceBetweenLatsInRadians / 2) *
        Math.sin(differenceBetweenLatsInRadians / 2) +
      Math.cos(this.degreeToRad(+startLat)) *
        Math.cos(this.degreeToRad(+finishLat)) *
        Math.sin(differenceBetweenLngsInRadians / 2) *
        Math.sin(differenceBetweenLngsInRadians / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distanceInKm = EARTH_RADIUS * c; // Distance in KM
    return distanceUnit === EDistanceUnit.KM
      ? precise
        ? distanceInKm
        : this.roundNumber(distanceInKm)
      : this.distanceConversionFromKm(distanceInKm, distanceUnit, precise);
  }

  distanceConversionFromKm(
    distance: number,
    unit: EDistanceUnit,
    precise: boolean
  ) {
    return unit === EDistanceUnit.MILE
      ? precise
        ? distance * MILES_IN_KM
        : this.roundNumber(distance * MILES_IN_KM)
      : precise
      ? distance * NAUTICAL_MILES_IN_KM
      : this.roundNumber(distance * NAUTICAL_MILES_IN_KM);
  }

  roundNumber = (distance: number) => Math.round(distance * 100) / 100;

  degreeToRad(deg: number) {
    return deg * (Math.PI / 180);
  }
}
