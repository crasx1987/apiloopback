import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Rutas,
  Aeropuerto,
} from '../models';
import {RutasRepository} from '../repositories';

export class RutasAeropuertoController {
  constructor(
    @repository(RutasRepository)
    public rutasRepository: RutasRepository,
  ) { }

  @get('/rutas/{id}/aeropuerto', {
    responses: {
      '200': {
        description: 'Aeropuerto belonging to Rutas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aeropuerto)},
          },
        },
      },
    },
  })
  async getAeropuerto(
    @param.path.string('id') id: typeof Rutas.prototype.Id,
  ): Promise<Aeropuerto> {
    return this.rutasRepository.destinoFk(id);
  }
}
