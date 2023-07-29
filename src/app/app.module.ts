import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsViewComponent } from './components/events-view/events-view.component';
import { IcomensViewComponent } from './components/icomens-view/icomens-view.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { TableMenuComponent } from './components/table-menu/table-menu.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { CreditCardViewComponent } from './components/credit-card-view/credit-card-view.component';
import { PatientViewComponent } from './components/patient-view/patient-view.component';
import { ProductViewsComponent } from './components/product-views/product-views.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsViewComponent,
    IcomensViewComponent,
    HomeViewComponent,
    TableMenuComponent,
    MenuCardComponent,
    CreditCardViewComponent,
    PatientViewComponent,
    ProductViewsComponent,
    ProductCardComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
