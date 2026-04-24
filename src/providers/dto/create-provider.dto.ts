import { IsEmail, IsOptional, IsString, MaxLength } from "class-validator";
import { Provider } from "../entities/provider.entity";
import { Column } from "typeorm";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateProviderDto  {
  
    @ApiProperty()
    @IsString()
    @MaxLength(100)
     declare providerName: string;
    
    @ApiProperty()
    @IsEmail()
    @IsString()
    declare providerEmail: string;
    
    @ApiPropertyOptional()
    @IsString()
    @MaxLength(15)
    @IsOptional()
    declare providerPhoneNumber: string;
}