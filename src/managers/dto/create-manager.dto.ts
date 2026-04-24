import { IsEmail, IsNumber, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Manager } from "../entities/manager.entity";
import { Location } from "../../locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateManagerDto extends Manager {
    @ApiProperty()
    @IsString()
    @MaxLength(80)
    declare managerFullName: string;
    @ApiProperty()
    @IsString()
    @IsEmail()
    declare managerEmail: string;
    @ApiProperty()
    @IsNumber()
    declare managerSalary: number;
    @ApiProperty()
    @IsString()
    @MaxLength(16)
    declare managerPhoneNumber: string;
    @ApiPropertyOptional()
    @IsObject()
    @IsOptional()
    declare location: Location

}
