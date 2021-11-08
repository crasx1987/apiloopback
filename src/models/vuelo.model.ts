import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Rutas} from './rutas.model';

@model({settings: {strict: false}})
export class Vuelo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  finicio: string;

  @property({
    type: 'string',
    required: true,
  })
  hinicio: string;

  @property({
    type: 'string',
    required: true,
  })
  ffin: string;

  @property({
    type: 'string',
    required: true,
  })
  hfin: string;

  @property({
    type: 'string',
    required: true,
  })
  asientosv: string;

  @property({
    type: 'string',
    required: true,
  })
  nombrepiloto: string;

  @belongsTo(() => Rutas, {name: 'rutasFk'})
  rutas: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}




export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
