import { IsArray, IsMongoId, IsNumber, IsString, ArrayNotEmpty, ArrayMinSize } from "class-validator";

export class articleDTO {

    @IsString()
    title: string;
    
    @IsString()
    slug: string;
    
    @IsString()
    description: string;  

    @IsString()
    content: string;
    
    @IsString()
    coverImage: string;
    
    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    images: Array<string>;
    
    @IsNumber()
    likes: number;
    
    @IsArray()
    @ArrayNotEmpty()
    @IsMongoId({ each: true })  
    tagList: string[]; 
    
    @IsMongoId()
    author: string; 
}
