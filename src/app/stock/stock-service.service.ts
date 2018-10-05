import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Stock } from '../data/stockData';
import { map } from 'rxjs/operators';

@Injectable()
export class StockServiceService {

  constructor(public http:Http) { 
  }

  getStocks():Observable<Stock[]> {
    return this.http.get('/api/stocks').pipe(
      map(res=>res.json())
    )
  }

  getStock(id:number):Observable<Stock> {
    return this.http.get('/api/stock/'+id).pipe(
      map(res=>res.json())
    )
  }
}
