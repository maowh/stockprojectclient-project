import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
//声明为管道
@Pipe({
  //html的管道名称定义
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  //输入参数为股票信息，格式化股票字段，keywords参数
  transform(stocks: any[], filed: string, keyWords: string): any {
    //如果股票字段或者keywords参数没有值，返回所有的股票
    if (!filed || !keyWords) { return stocks; };
    return stocks.filter(item => {
      let stockFiledValue = item[filed].toLowerCase();
      //筛选格式化股票字段中包含keywords参数胡所有股票
      return stockFiledValue.indexOf(keyWords) >= 0;
    })
  }
}

