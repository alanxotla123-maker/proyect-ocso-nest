import { IsEmail, IsOptional, IsString, MaxLength } from "class-validator";
import { Provider } from "../entities/provider.entity";
import { Column } from "typeorm";

export class CreateProviderDto  {
  
    @IsString()
    @MaxLength(100)
     declare providerName: string;
    
    @IsEmail()
    @IsString()
    declare providerEmail: string;
    
    @IsString()
    @MaxLength(15)
    @IsOptional()
    declare providerPhoneNumber: string;
}