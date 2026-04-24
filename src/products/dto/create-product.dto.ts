import { IsNumber, IsInt, IsOptional, IsString, IsUUID, MaxLength, IsObject } from "class-validator";
import { Product } from "../entities/product.entity";
import { Provider } from '../../providers/entities/provider.entity';
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateProductDto extends Product {
    @ApiPropertyOptional()
    @IsString()
    @IsUUID("4")
    @IsOptional()
    declare id: string;
    @ApiProperty()
    @IsString()
    @MaxLength(40)
    declare productName: string;
    @ApiProperty()
    @IsNumber()
    declare price: number;
    @ApiProperty()
    @IsInt()
    declare countSeal: number;
    @ApiProperty()
    @IsObject()
    declare provider: Provider;
}
