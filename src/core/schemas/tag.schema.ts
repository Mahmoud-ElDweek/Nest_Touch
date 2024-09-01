import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Tag {
    // @Prop({ required: true, type: mongoose.Types.ObjectId })
    // id: any;
    
    
    @Prop({ required: true })
    name: string;

    
    @Prop({ required: true, type: mongoose.Types.ObjectId })
    createdBy: any;

}

export const TagSchema = SchemaFactory.createForClass(Tag);
