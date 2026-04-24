import { IsNumber, IsInt, IsOptional, IsString, IsUUID, MaxLength, IsObject } from "class-validator";
import { Product } from "../entities/product.entity";
import { Provider } from '../../providers/entities/provider.entity';

export class CreateProductDto extends Product {
    @IsString()
    @IsUUID("4")
    @IsOptional()
    declare id: string;
    @IsString()
    @MaxLength(40)
    declare productName: string;
    @IsNumber()
    declare price: number;
    @IsInt()
    declare countSeal: number;
    @IsObject()
    declare provider: Provider;
}
