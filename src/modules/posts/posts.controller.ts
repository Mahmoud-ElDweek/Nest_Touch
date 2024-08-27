import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private _postsService: PostsService) {}

  @Get()
  getPosts(){
    return this._postsService.getPosts()
  }
}
