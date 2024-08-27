import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/core/schemas/posts.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema}])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
