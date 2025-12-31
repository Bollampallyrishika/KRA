/* eslint-disable prettier/prettier */
import {  IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;
    @IsString()
    pass: string;
    @IsString()
    email: string;
}
