import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { StockManagerComponent } from './stock/stock-manager/stock-manager.component';
// import { PageNotFoundComponent } from './';

const routes: Routes = [
    // {path: 'app', component: AppComponent },
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'stockform/:id',component:StockFormComponent},
    {path:'home',component:HomeComponent},
    {path:'stockmanager',component:StockManagerComponent},

    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class StockRoutingModule {}

