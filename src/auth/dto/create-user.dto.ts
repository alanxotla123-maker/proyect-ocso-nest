import { IsEmail, IsString, MinLength, IsOptional, IsArray, IsIn } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto {
    @IsOptional()
    userId?: string;

    @IsEmail()
    userEmail!: string;

    @IsString()
    @MinLength(8)
    userPassword!: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    @IsIn(['Admin', 'Manager', 'Employee'])
    userRoles?: string[];
}
