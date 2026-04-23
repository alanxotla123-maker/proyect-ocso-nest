import { IsEmail, IsString, MinLength, IsOptional, IsArray } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsOptional()
    declare userId: string;

    @IsEmail()
    declare userEmail: string;

    @IsString()
    @MinLength(8)
    declare userPassword: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    declare userRoles: string[];
}
