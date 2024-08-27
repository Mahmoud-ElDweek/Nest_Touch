import { IsEmail, IsString, MaxLength, MinLength,  } from "class-validator";


export class signUpDTO {

    @MinLength(3)
    @MaxLength(10)
    @IsString()
    name: string ;


    @IsEmail()
    email: string;
    
    
    @IsString()
    @MinLength(3)
    @MaxLength(10)
    password: string;

}