import { ArrayNotEmpty, IsArray, IsString, MaxLength } from "class-validator";

export class CreateLocationDto extends Location {
@IsString()
@MaxLength(25)
LocationName!: string
@IsString()
@MaxLength(160)
locationAdress!: string;
@IsArray()
@ArrayNotEmpty()
locationLatLng!: number[]


}
