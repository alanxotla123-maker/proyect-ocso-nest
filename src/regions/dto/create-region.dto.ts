import { Entity } from "typeorm";
import { Region } from "../entities/region.entity";
import { IsArray, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class CreateRegionDto extends Region{
    @ApiProperty()
    @IsString()
    @MaxLength(100)
   declare regionName: string;
   @ApiProperty()
   @IsArray()
   declare regionStates: string[];

}
