import { Component } from '@angular/core';
import  {DataService} from '../../services/data.service'
import {ITarjetaCredito,createRandomCreditCart} from '../../../utilities/withCurrencyFakeData'
@Component({
  selector: 'app-credit-card-view',
  templateUrl: './credit-card-view.component.html',
  styleUrls: ['./credit-card-view.component.css']
})
export class CreditCardViewComponent {
  tarjetasArray : ITarjetaCredito[];
  constructor(private dataService : DataService) {
    this.tarjetasArray = dataService.getTarjetas();
    console.log(this.tarjetasArray);
  }
}
