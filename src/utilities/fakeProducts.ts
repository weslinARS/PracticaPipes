import { faker } from "@faker-js/faker";

export interface IProduct{
  id : string;
  nombre : string;
  precio : number;
  descuento : number;
  cantidad : number;
  calificacion : number;
}
const fakeProducts = ():IProduct=>{
  return {
    id: faker.string.uuid(),
    nombre : faker.commerce.productName(),
    precio : faker.number.float({min:500, max:1000}),
    descuento : faker.number.float({min:0, max:0.5}),
    cantidad : faker.number.int({min:0,max:500}),
    calificacion : faker.number.float({min:1, max:5,precision:0.5})
  }
}

export const fakeProductsArray = (cantidad : number):IProduct[]=>{
  const products : IProduct[] = [];
  for(let i = 0; i < cantidad; i++){
    products.push(fakeProducts());
  }
  return products;
}