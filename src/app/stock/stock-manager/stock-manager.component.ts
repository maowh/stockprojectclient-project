import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { StockServiceService } from '../stock-service.service';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {

  searchName: FormControl = new FormControl();
  stocks;
  keyWords: string;
  stocksObservables: Observable<any>;

  constructor(
    private router: Router, 
    // public http: Http, 
    private stockService: StockServiceService) {
    // let myHeaders:Headers=new Headers();
    // myHeaders.append("Authorization","Basic 123456");
    // this.stocksObservables = this.http.get('/api/stocks',{headers:myHeaders}).pipe(
    //   map(res => res.json())
    // )
  }

  ngOnInit() {
    this.stocks= this.stockService.getStocks();
    //监听input输入值变化，当500毫秒无变化时，将值记录下来
    this.searchName.valueChanges.pipe(
      debounceTime(500),
    ).subscribe(value => {
      this.keyWords = value;
      // this.stocks=stocks.filter(item=>item.name.includes(this.keyWords));
    });
  }

  modifyClick(stockId: number) {
    this.router.navigateByUrl('/stockform/' + stockId);
  }

  addClick() {
    this.router.navigateByUrl('/stockform/0');
  }

}
