import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagsService } from './tags.service';
import { tagDTO } from './tag.DTO';

@Controller('tags')
export class TagsController {
  constructor(private readonly _tagsService: TagsService) {}

  @Post()
  addTag(@Body() body: tagDTO) {
    return this._tagsService.addTag(body);
  }

  @Get()
  getAllTags() {
    return this._tagsService.getAllTags();
  }

  @Get(':id')
  getTagById(@Param('id') id: string) {
    return this._tagsService.getTagById(id);
  }

  @Put(':id')
  updateTag(@Param('id') id: string, @Body() body: tagDTO) {
    return this._tagsService.updateTag(id, body);
  }

  @Delete(':id')
  deleteTag(@Param('id') id: string) {
    return this._tagsService.deleteTag(id);
  }
}
