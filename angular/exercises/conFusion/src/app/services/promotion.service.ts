import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  //when observable is used as type then remove .toPromise() method and change the type from Promise to Observable

  getPromotions(): Observable<Promotion[]> {
    // return PROMOTIONS;
    // return Promise.resolve(PROMOTIONS);
    //for delay in service
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTIONS), 2000);
    // });

    //using rxjs
    // return of(PROMOTIONS).pipe(delay(2000)).toPromise();

    //using observable
    // return of(PROMOTIONS).pipe(delay(2000));

    //using http service
    // return this.http.get<Promotion[]>(baseURL + 'promotions');

    //using http service and handling error
    return this.http.get<Promotion[]>(baseURL + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {
    // return PROMOTIONS.filter((promo) => (promo.id === id))[0];
    // return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
    // });
    // return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
    // return this.http.get<Promotion>(baseURL + 'promotions/' + id);
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    // return PROMOTIONS.filter((promotion) => promotion.featured)[0];
    // return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
    // });
    // return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
    // return this.http.get<Promotion>(baseURL + 'promotions?featured=true').pipe(map(leader => leader[0]));
    return this.http.get<Promotion>(baseURL + 'promotions?featured=true').pipe(map(leader => leader[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
