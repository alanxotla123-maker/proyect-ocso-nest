import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';
import { Location } from './entities/location.entity'; // Asegúrate de importar tu entidad
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository : Repository <Location>
  ){}
  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.save(createLocationDto);
  }

  findAll() {
    return this.locationRepository.find();
  }

  findOne(id: number) {
    const  location = this.locationRepository.findOneBy({
        locationId : id,
    })
    if(!location) throw new NotFoundException("Locations not found")
  }

 async update(id: number, updateLocationDto: UpdateLocationDto) {
    const locationUpdate =  await this.locationRepository.preload({
      locationId : id,
      ... updateLocationDto,
    })
    if(!locationUpdate) throw new NotFoundException()
    return this.locationRepository.save(locationUpdate)
  }

  remove(id: number) {
    return this.locationRepository.delete({
      locationId: id,
    })
  }
}
