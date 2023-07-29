import { faker } from "@faker-js/faker";

export interface ITarjetaCredito{
  nombreUsuario: string;
  numeroTarjeta: string;
  fechaExpiracion: Date;
  LimiteMonedaLocal : number;
  LimiteMonedaExtranjera : number;
  monedaLocal : 'USD';
  monedaExtranjera : string;
}

const MONEDA_EXTRANJERA = ['EUR','CAD','GBP','JPY'];
const createCreditCart = () : ITarjetaCredito =>{
  const index = Math.floor(Math.random()*MONEDA_EXTRANJERA.length);
  return{
    nombreUsuario : faker.person.firstName(),
    numeroTarjeta : faker.finance.creditCardNumber(),
    fechaExpiracion : faker.date.future(),
    LimiteMonedaLocal : faker.number.int({min: 1000, max: 10000}),
    LimiteMonedaExtranjera : faker.number.int({min: 100, max: 1000}),
    monedaLocal : 'USD',
    monedaExtranjera : MONEDA_EXTRANJERA[index]
    }
}

export const createRandomCreditCart = (cantidad : number): ITarjetaCredito[] => {
  const tarjetas : ITarjetaCredito[] = [];
  for(let i = 0; i < cantidad; i++){
    tarjetas.push(createCreditCart());
  }
  return tarjetas;
}