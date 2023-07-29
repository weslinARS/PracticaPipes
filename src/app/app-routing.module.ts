import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsViewComponent } from './components/events-view/events-view.component';
import { IcomensViewComponent } from './components/icomens-view/icomens-view.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { TableMenuComponent } from './components/table-menu/table-menu.component';
import { CreditCardViewComponent } from './components/credit-card-view/credit-card-view.component';
import { PatientViewComponent } from './components/patient-view/patient-view.component';
import { ProductViewsComponent } from './components/product-views/product-views.component';
import { OrderListComponent } from './components/order-list/order-list.component';
const routes: Routes = [
  {
    path: '',
    component : HomeViewComponent,
    children: [
      {
        path : '',
        component: TableMenuComponent,
      },
      {
        path:'eventos',
        component: EventsViewComponent
      },
      {
        path: 'ingresos',
        component : IcomensViewComponent
      },
      {
        path: 'tarjetasCredito',
        component : CreditCardViewComponent
      },{
        path : 'pacientes',
        component : PatientViewComponent
      },{
        path : 'productos',
        component : ProductViewsComponent
      },{
        path : 'productoOrdenado',
        component : OrderListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
