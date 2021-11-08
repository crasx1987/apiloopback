import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Vuelo, VueloRelations, Rutas} from '../models';
import {RutasRepository} from './rutas.repository';

export class VueloRepository extends DefaultCrudRepository<
  Vuelo,
  typeof Vuelo.prototype.Id,
  VueloRelations
> {

  public readonly rutaFk: BelongsToAccessor<Rutas, typeof Vuelo.prototype.Id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('RutasRepository') protected rutasRepositoryGetter: Getter<RutasRepository>,
  ) {
    super(Vuelo, dataSource);
    this.rutaFk = this.createBelongsToAccessorFor('rutaFk', rutasRepositoryGetter,);
    this.registerInclusionResolver('rutaFk', this.rutaFk.inclusionResolver);
  }
}
