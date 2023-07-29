import { Component } from '@angular/core';
import {DataService} from '../../services/data.service'
import {IProduct,fakeProductsArray} from '../../../utilities/fakeProducts'
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  productArray:IProduct[] ;
  constructor(private dataService:DataService) {
    this.productArray = this.dataService.getProducts();
    console.log(this.productArray);
  }
}

