import { Sex, faker } from "@faker-js/faker";


export interface IPatient{
  nombre : string;
  apellido : string;
  edad : number;
  dni : string;
  ocupacion : string;
  telefono : string;
  direccion : string;
}


export const patientFakeData = () :IPatient =>{
  return {
    nombre : faker.person.firstName(),
    apellido : faker.person.lastName(),
    edad : faker.number.int({max: 100, min: 1}),
    dni : faker.string.uuid(),
    ocupacion : faker.person.jobTitle(),
    telefono : faker.phone.number(),
    direccion : faker.location.streetAddress(),
    }
}

export const patientFakeDataArray = (cantidad : number) : IPatient[] =>{
  const patients : IPatient[] = [];
  for(let i = 0; i < cantidad; i++){
    patients.push(patientFakeData());
  }
  return patients;
}