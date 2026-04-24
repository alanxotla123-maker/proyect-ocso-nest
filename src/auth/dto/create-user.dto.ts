import { IsEmail, IsString, MinLength, IsOptional, IsArray, IsIn } from "class-validator";
import { User } from "../entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: "user@gmial.com"
    })
    @IsEmail()
    userEmail!: string;
    @ApiProperty({
        default: "12345678"
    })
    @IsString()
    @MinLength(8)
    userPassword!: string;
    @ApiProperty({
        default: "Employee"
    })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    @IsIn(['Admin', 'Manager', 'Employee'])
    userRoles?: string[];
}
