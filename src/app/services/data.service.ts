import { Injectable } from '@angular/core';
import {createRandomEvent, IEvento} from '../../utilities/withDateFakedata'
import {ITarjetaCredito,createRandomCreditCart} from '../../utilities/withCurrencyFakeData'
import {IPatient,patientFakeDataArray} from '../../utilities/patientFakeData'
import {IProduct,fakeProductsArray} from '../../utilities/fakeProducts'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private arrayEventos : IEvento[];
  private arrayTarjetas : ITarjetaCredito[];
  private arrayPacientes : IPatient[];
  private arrayProductos : IProduct[];
  constructor() {
    this.arrayEventos = createRandomEvent(10);
    this.arrayTarjetas = createRandomCreditCart(10);
    this.arrayPacientes = patientFakeDataArray(10);
    this.arrayProductos = fakeProductsArray(15);
  }
  getEventos(){
    return this.arrayEventos;
  }
  getTarjetas(){ 
    return this.arrayTarjetas;
  }
  getPacientes(){
    return this.arrayPacientes;
  }
  getProducts(){
    return this.arrayProductos;
  }
}
