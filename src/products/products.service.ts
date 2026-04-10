import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {v4 as uuid} from 'uuid';
import { empty, NotFoundError } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { MESSAGES } from '@nestjs/core/constants';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>){}
   
  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.save(createProductDto)

    return product;
  }

  findAll() {
    return this.productRepository.find({
      loadEagerRelations: true,
      relations: {
        provider: true,
      }
    });

  }

  findOne(id: string) {
    const products = this.productRepository.findOneBy({ id });
    if(!products) throw new NotFoundException(`Producto with ID ${id} not found`);
    return products;

  }
  findByProvider(id: string){

return "Ok";
}
 
 async update(id: string, updateProductDto: UpdateProductDto) {
    const  productsToUpdate = await this.productRepository.preload({
      id: id,
      ... UpdateProductDto
    });
    if (!productsToUpdate) throw new NotFoundException
    this.productRepository.save(productsToUpdate)
    return productsToUpdate;
  }

  remove(id: string) {
   this.productRepository.delete({
    id:id,
  })
  return{
        message: `objeto con id ${id} eliminado`

  }
  
  }
}
