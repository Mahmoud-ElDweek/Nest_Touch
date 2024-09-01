import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({ timestamps: true, versionKey: false })
export class Article {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    slug: string;

    @Prop({ required: true })
    description: string; 

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    coverImage: string;

    @Prop({ required: true, type: [String] })
    images: Array<string>;

    @Prop({ required: true, default: 0 })
    likes: number;

    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] })
    tagList: Array<mongoose.Types.ObjectId>; 

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author: mongoose.Types.ObjectId; 
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
