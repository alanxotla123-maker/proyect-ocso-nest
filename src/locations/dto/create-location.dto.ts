import { ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Location } from "../entities/location.entity";
import { Region } from "../../regions/entities/region.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateLocationDto extends Location {
    @ApiProperty()
    @IsString()
    @MaxLength(25)
    declare locationName: string
    @ApiProperty()
    @IsString()
    @MaxLength(160)
    declare locationAddress: string;
    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    declare locationLatLng: number[]
    @ApiPropertyOptional()
    @IsObject()
    @IsOptional()
    declare region: Region;

}
