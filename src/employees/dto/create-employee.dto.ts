import { IsEmail, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Employee } from "../entities/employee.entity";
import { Location } from "../../locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class LocationEmployeeDto extends Location {
    @ApiProperty()
    declare locationId: number;

    @ApiPropertyOptional()
    declare locationName: string;

    @ApiPropertyOptional()
    declare locationAddress: string;

    @ApiPropertyOptional()
    declare locationLatLng: number[];

}

export class CreateEmployeeDto {
    @ApiProperty()
    @IsString()
    @MaxLength(30)
    employeeName!: string;

    @ApiProperty()
    @IsString()
    @MaxLength(70)
    employeeLastName!: string;

    @ApiProperty()
    @IsString()
    @MaxLength(10)
    employeePhoneNumber!: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    employeeEmail!: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    declare location: LocationEmployeeDto;
}
