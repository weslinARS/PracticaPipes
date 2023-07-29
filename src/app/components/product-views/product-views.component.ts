import { Component } from '@angular/core';
import {DataService} from '../../services/data.service'
import {IProduct,fakeProductsArray} from '../../../utilities/fakeProducts'
@Component({
  selector: 'app-product-views',
  templateUrl: './product-views.component.html',
  styleUrls: ['./product-views.component.css']
})
export class ProductViewsComponent {
  productArray:IProduct[] ;
  constructor(private dataService:DataService) {
    this.productArray = this.dataService.getProducts();
    console.log(this.productArray);
  }
}
