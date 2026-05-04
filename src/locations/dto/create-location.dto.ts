import { ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { Region } from "../../regions/entities/region.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateLocationDto {
    @ApiProperty()
    @IsString()
    @MaxLength(25)
    locationName!: string
    @ApiProperty()
    @IsString()
    @MaxLength(160)
    locationAddress!: string;
    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    locationLatLng!: number[]
    @ApiPropertyOptional()
    @IsObject()
    @IsOptional()
    region?: Region;
    @IsUUID()
    @IsOptional()
    manager?: string;

}
