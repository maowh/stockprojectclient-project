import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../../data/stockData';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StockServiceService } from '../stock-service.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stockId: number;
  rating: number;
  stocks: Observable<any>;
  stock: Stock = new Stock(0, "", 0, 0, "", []);
  formModel: FormGroup;
  fb: FormBuilder;
  categories = ["IT", "互联网", "金融"];

  constructor(
    private routerInfo: ActivatedRoute, 
    private router: Router, 
    // public http: Http, 
    private stockService: StockServiceService
    ) { }

  ngOnInit() {
    //初始化form表单
    let fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      desc: [''],
      categories: fb.array([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
      ], this.categoriesSelectValidator)
    });
    //根据传入的参数重写form表单数据
    this.stockId = this.routerInfo.snapshot.params['id'];
    this.stockService.getStock(this.stockId).subscribe(data => {
      this.stock = data;
      this.formModel.reset({
        name: [data.name],
        price: [data.price],
        desc: [data.desc],
        categories: [
          data.categories.indexOf(this.categories[0]) != -1,
          data.categories.indexOf(this.categories[1]) != -1,
          data.categories.indexOf(this.categories[2]) != -1,
        ]
      })
    });
  }

  cancel() {
    this.router.navigateByUrl('stockmanager');
  }

  save() {
    let categories=[];
    let i;
    for(i=0;i<3;i++) {
      if(this.formModel.value.categories[i]) {
        categories[i]=this.categories[i];
      }
    }
    this.formModel.value.categories=categories;
    this.formModel.value.rating=this.stock.rating;
  }

  categoriesSelectValidator(control: FormArray) {
    var valid = false;
    //循环判断是否有真值
    control.controls.forEach(
      control => {
        if (control.value) {
          valid = true;
        }
      }
    );
    if (valid) {
      return null;
    } else {
      return { categoriesLength: true };
    }
  }

}
