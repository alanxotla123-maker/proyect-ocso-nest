import { ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Location } from "../entities/location.entity";
import { Region } from "../../regions/entities/region.entity";

export class CreateLocationDto extends Location {
    @IsString()
    @MaxLength(25)
    declare locationName: string
    @IsString()
    @MaxLength(160)
    declare locationAddress: string;
    @IsArray()
    @ArrayNotEmpty()
    declare locationLatLng: number[]
    @IsObject()
    @IsOptional()
    declare region: Region;

}
