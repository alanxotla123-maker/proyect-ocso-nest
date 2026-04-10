import { Entity } from "typeorm";
import { Region } from "../entities/region.entity";
import { IsArray, IsString, MaxLength } from "class-validator";

@Entity()
export class CreateRegionDto extends Region{
    @IsString()
    @MaxLength(100)
   declare regionName: string;
   @IsArray()
   declare regionStates: string[];



}
