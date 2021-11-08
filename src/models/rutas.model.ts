import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Aeropuerto} from './aeropuerto.model';

@model({settings: {strict: false}})
export class Rutas extends Entity {
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
  tiempoestimado: string;

  @belongsTo(() => Aeropuerto, {name: 'origenFk'})
  origen: string;

  @belongsTo(() => Aeropuerto, {name: 'destinoFk'})
  destino: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Rutas>) {
    super(data);
  }
}

export interface RutasRelations {
  // describe navigational properties here
}

export type RutasWithRelations = Rutas & RutasRelations;
