import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Rutas} from '../models';
import {RutasRepository} from '../repositories';

export class RutasController {
  constructor(
    @repository(RutasRepository)
    public rutasRepository : RutasRepository,
  ) {}

  @post('/rutas')
  @response(200, {
    description: 'Rutas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rutas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rutas, {
            title: 'NewRutas',
            exclude: ['Id'],
          }),
        },
      },
    })
    rutas: Omit<Rutas, 'Id'>,
  ): Promise<Rutas> {
    return this.rutasRepository.create(rutas);
  }

  @get('/rutas/count')
  @response(200, {
    description: 'Rutas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Rutas) where?: Where<Rutas>,
  ): Promise<Count> {
    return this.rutasRepository.count(where);
  }

  @get('/rutas')
  @response(200, {
    description: 'Array of Rutas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rutas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rutas) filter?: Filter<Rutas>,
  ): Promise<Rutas[]> {
    return this.rutasRepository.find(filter);
  }

  @patch('/rutas')
  @response(200, {
    description: 'Rutas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rutas, {partial: true}),
        },
      },
    })
    rutas: Rutas,
    @param.where(Rutas) where?: Where<Rutas>,
  ): Promise<Count> {
    return this.rutasRepository.updateAll(rutas, where);
  }

  @get('/rutas/{id}')
  @response(200, {
    description: 'Rutas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rutas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rutas, {exclude: 'where'}) filter?: FilterExcludingWhere<Rutas>
  ): Promise<Rutas> {
    return this.rutasRepository.findById(id, filter);
  }

  @patch('/rutas/{id}')
  @response(204, {
    description: 'Rutas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rutas, {partial: true}),
        },
      },
    })
    rutas: Rutas,
  ): Promise<void> {
    await this.rutasRepository.updateById(id, rutas);
  }

  @put('/rutas/{id}')
  @response(204, {
    description: 'Rutas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rutas: Rutas,
  ): Promise<void> {
    await this.rutasRepository.replaceById(id, rutas);
  }

  @del('/rutas/{id}')
  @response(204, {
    description: 'Rutas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rutasRepository.deleteById(id);
  }
}
