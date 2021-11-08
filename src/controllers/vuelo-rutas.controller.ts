import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Vuelo,
  Rutas,
} from '../models';
import {VueloRepository} from '../repositories';

export class VueloRutasController {
  constructor(
    @repository(VueloRepository)
    public vueloRepository: VueloRepository,
  ) { }

  @get('/vuelos/{id}/rutas', {
    responses: {
      '200': {
        description: 'Rutas belonging to Vuelo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Rutas)},
          },
        },
      },
    },
  })
  async getRutas(
    @param.path.string('id') id: typeof Vuelo.prototype.Id,
  ): Promise<Rutas> {
    return this.vueloRepository.rutaFk(id);
  }
}
