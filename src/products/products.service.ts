import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {v4 as uuid} from 'uuid';
import { empty, NotFoundError } from 'rxjs';
<<<<<<< HEAD
import { privateDecrypt } from 'crypto';
=======
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { MESSAGES } from '@nestjs/core/constants';
>>>>>>> 8099e77 (All methods implemented)
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>){}
    private products: CreateProductDto[]=[
 {
     id: uuid(),
    productName: "Sabritas Normal",
    price: 29,
    countSeal: 3,
    provider:uuid(),
  },
  {
   id: uuid(),
    productName: "Coca",
    price: 40,
    countSeal: 2,
    provider:uuid(), 
  },
   {
   id: uuid(),
    productName: "Agua",
    price: 15,
    countSeal: 9,
    provider:uuid(), 
  }
<<<<<<< HEAD
]
  create(createProductDto: CreateProductDto) {
    if(!createProductDto.id) createProductDto.id =uuid()
    createProductDto.id = uuid();
    this.products.push(createProductDto);
    return createProductDto;
=======
    ]
  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.save(createProductDto)

    return product;
>>>>>>> 8099e77 (All methods implemented)
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    const products = this.productRepository.findOneBy({ id });
    if(!products) throw new NotFoundException(`Producto with ID ${id} not found`);
    return products;

  }
  findByProvider(id: string){
  const productsFound = this.products.filter(product => product.provider === id);

  if(productsFound.length === 0){
    throw new NotFoundException('Provider not found');
}
return productsFound;
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
