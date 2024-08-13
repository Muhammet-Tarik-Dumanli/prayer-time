import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { PrayerTimes } from '../models/prayer-times.model';

@Injectable({
  providedIn: 'root'
})
export class PrayerTimesService {

  constructor(private http: HttpClient) { }

  getPrayerTimes(cityName: string, countryName: string) : Observable<PrayerTimes> {
    return this.http.get<PrayerTimes>(environment.adhanApiBaseUrl, {
      params: new HttpParams()
      .set('city', cityName)
      .set('country', countryName)
    })
  }
}
