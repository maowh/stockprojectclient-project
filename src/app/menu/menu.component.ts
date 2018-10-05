import { Component, OnInit } from '@angular/core';
import { menus, Menu } from '../data/stockData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = menus;
  currentMenuId:number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentMenuId=1;
  }

  menuSelect(menu: Menu) {
    this.currentMenuId=menu.id;
    this.router.navigateByUrl(menu.link);
  }

}
