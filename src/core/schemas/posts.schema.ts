import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({timestamps:true,versionKey: false})
export class Post {
    
    @Prop({required:true})
    title: string;
    
    
    @Prop({required:true})
    info: string;
    
    
    @Prop({required:true, type: mongoose .Schema.Types.ObjectId, ref: 'User'})
    userId:any
}

export const PostSchema = SchemaFactory.createForClass(Post);
