import { IsNotEmpty, IsString } from "class-validator";



export class tagDTO {

    @IsString()
    @IsNotEmpty()
    name: string;


    createdBy: any;
}