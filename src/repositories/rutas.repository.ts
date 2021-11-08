import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Rutas, RutasRelations, Aeropuerto} from '../models';
import {AeropuertoRepository} from './aeropuerto.repository';

export class RutasRepository extends DefaultCrudRepository<
  Rutas,
  typeof Rutas.prototype.Id,
  RutasRelations
> {

  public readonly origenFk: BelongsToAccessor<Aeropuerto, typeof Rutas.prototype.Id>;

  public readonly destinoFk: BelongsToAccessor<Aeropuerto, typeof Rutas.prototype.Id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('AeropuertoRepository') protected aeropuertoRepositoryGetter: Getter<AeropuertoRepository>,
  ) {
    super(Rutas, dataSource);
    this.destinoFk = this.createBelongsToAccessorFor('destinoFk', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('destinoFk', this.destinoFk.inclusionResolver);
    this.origenFk = this.createBelongsToAccessorFor('origenFk', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('origenFk', this.origenFk.inclusionResolver);
  }
}
