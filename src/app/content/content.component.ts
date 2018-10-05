import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle: string = '这里是首页';
  pageSubtitle: string = '';
  constructor(private router:Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe((event:NavigationEnd) => {
        if (event.url == '/home') {
          this.pageTitle = '这里是首页';
          this.pageSubtitle = '';
        }
        else if (event.url.startsWith('/stock')) {
          this.pageTitle = '股票信息管理';
          this.pageSubtitle = '进行股票信息基本增删改查';
        }
      })
  }

  ngOnInit() {

  }

}
