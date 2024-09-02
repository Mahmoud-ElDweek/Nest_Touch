import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from 'src/core/schemas/articles.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema}])],
  controllers: [ArticlesController],
  providers: [ArticlesService,JwtService],
})
export class ArticlesModule {}
