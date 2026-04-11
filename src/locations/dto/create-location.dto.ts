import { ArrayNotEmpty, IsArray, IsString, MaxLength } from "class-validator";
import { Location } from "../entities/location.entity";

export class CreateLocationDto extends Location {
@IsString()
@MaxLength(25)
LocationName!: string
@IsString()
@MaxLength(160)
locationAdress!: string;
@IsArray()
@ArrayNotEmpty()
declare locationLatLng: number[]


}
