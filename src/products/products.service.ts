import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {v4 as uuid} from 'uuid';
import { empty, NotFoundError } from 'rxjs';
import { privateDecrypt } from 'crypto';
@Injectable()
export class ProductsService {
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
]
  create(createProductDto: CreateProductDto) {
    createProductDto.id = uuid();
    this.products.push(createProductDto);
    return createProductDto;
  }

  findAll() {
    return this.products;
  }

  findOne(provider: string) {
    const products = this.products.filter((products) => products.id === provider)[0];
    if(!products) throw new NotFoundException();
    return products;

  }
    findByProvider(id: string){
  const products = this.products.filter(product => product.provider === id);

  if(products.length === 0){
    throw new NotFoundException('Provider not found');
  }
  return products;
}
 
  update(id: string, updateProductDto: UpdateProductDto) {
    let productsToUpdate = this.findOne(id);
    productsToUpdate = {
      ... productsToUpdate,
      ... updateProductDto,
    }
    this.products = this.products.map(products =>{
      if(products.id === id){
        products = productsToUpdate
      }
      return products;
    })
    return productsToUpdate
  }

  remove(id: string) {
   this.findOne(id)
   this.products = this.products.filter((products) => products.id !== id );
   return this.products
   }
}
