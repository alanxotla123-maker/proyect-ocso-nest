import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity'; // Asegúrate de importar tu entidad
import { InjectRepository } from '@nestjs/typeorm';
import { Manager } from '../managers/entities/manager.entity';
@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    @InjectRepository(Manager)
    private managerRepository: Repository<Manager>
  ) { }
  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.save(createLocationDto);
  }

  findAll() {
    return this.locationRepository.find();
  }

  async findOne(id: number) {
    const location = await this.locationRepository.findOneBy({
      locationId: id,
    })
    if (!location) throw new NotFoundException("Locations not found")
    return location;
  }
  async update(id: number, updateLocationDto: UpdateLocationDto) {
    // 1. Desvincular managers antiguos de esta ubicación
    // Importante: Usar :id y await para que la operación termine antes de seguir
    await this.managerRepository
      .createQueryBuilder()
      .update()
      .set({ location: null as any })
      .where("locationId = :id", { id }) // Agregué ":" para el parámetro
      .execute();

    // 2. Pre-cargar la ubicación
    const location = await this.locationRepository.preload({
      locationId: id,
      ...updateLocationDto
    });

    if (!location) throw new NotFoundException(`Location #${id} not found`);

    // Guardamos la ubicación actualizada
    await this.locationRepository.save(location);

    // 3. Vincular el nuevo manager (SOLUCIÓN AL ERROR)
    // Agregamos el await aquí:
    const updatedManager = await this.managerRepository.preload({
      managerId: updateLocationDto.manager,
      location: location
    });

    if (!updatedManager) {
      throw new NotFoundException("Manager not found");
    }

    // Guardamos y retornamos el manager actualizado (ya con su nueva ubicación)
    return await this.managerRepository.save(updatedManager);
  }

  remove(id: number) {
    return this.locationRepository.delete({
      locationId: id,
    })
  }
}
