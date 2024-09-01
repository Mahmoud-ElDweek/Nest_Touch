import { Injectable } from '@nestjs/common';
import { tagDTO } from './tag.DTO';
import { InjectModel } from '@nestjs/mongoose';
import { Tag } from 'src/core/schemas/tag.schema';
import { Model } from 'mongoose';

@Injectable()
export class TagsService {

    constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) {}

    async addTag(body: tagDTO) {
        console.log('Received body:', body);
        const addedTag = await this.tagModel.create(body);
        return { message: "Tag added", addedTag };
    }
    

    async getAllTags() {
        const allTags = await this.tagModel.find();
        return { message: "All Tags", allTags };
    }

    async getTagById(id: string) {
        const tagbyid = await this.tagModel.findById(id);
        return { message: "One Tag", tagbyid };
    }

    async updateTag(id: string, body: tagDTO) {
        const updatedTag = await this.tagModel.findByIdAndUpdate(id, body, { new: true });
        return { message: "Tag updated", updatedTag };
    }

    async deleteTag(id: string) {
        const deletedTag = await this.tagModel.findByIdAndDelete(id);
        return { message: "Tag deleted", deletedTag };
    }
}
