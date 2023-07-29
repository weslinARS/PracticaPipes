import { faker } from "@faker-js/faker";

export interface IEvento {
  duracionEvento : number;
  fechaEvento : Date;
  horaEvento : Date;
  organizadorEvento : string;
  cantParticipantesEvento : number;
  fechaContratacion : Date;
}

const createRandomCEvent= () :  IEvento =>{
  return {
    duracionEvento: faker.number.int({min: 1, max: 10}),
    fechaEvento: faker.date.future(),
    horaEvento: faker.date.future(),
    organizadorEvento: faker.person.firstName(),
    cantParticipantesEvento: faker.number.int(100),
    fechaContratacion: faker.date.past()
  }
}

export const createRandomEvent = (cantidad : number): IEvento[] => {
  const eventos : IEvento[] = [];
  for(let i = 0; i < cantidad; i++){
    eventos.push(createRandomCEvent());
  }
  return eventos;
}