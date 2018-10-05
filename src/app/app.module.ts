import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StockManagerComponent } from './stock/stock-manager/stock-manager.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { StockRoutingModule } from './app-routing.module';
import { StarsComponent } from './stars/stars.component';
import { HomeComponent } from './home/home.component';
import { SearchFilterPipe } from './stock/searchname.pipe';
import { StockServiceService } from './stock/stock-service.service';
import { WsService } from './header/ws.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    StockManagerComponent,
    StockFormComponent,
    StarsComponent,
    HomeComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    StockRoutingModule,
    FormsModule,//模版式表单引用
    //导入该模块时增加formcontrol校验
    ReactiveFormsModule,//响应式表单引用
    HttpModule,
  ],
  providers: [StockServiceService,WsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
