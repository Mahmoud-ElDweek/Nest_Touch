import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { articleDTO } from './DTO/article.DTO';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly _articlesService: ArticlesService) { }


  @Post()
  async addArticle(@Body() body: articleDTO) {
    const res = await this._articlesService.addArticle(body)
    return res
  }

  @Get()
  async getAllArticles() {
    const res = await this._articlesService.getAllArticles()
    return res
  }

  @Get(':id')
  getArticleById(@Param('id') id: string){
    return this._articlesService.getArticleById(id)
  }


  @Put(':id')
  updateArticle(@Param('id') id: string, @Body() body: any){
    return this._articlesService.updateArticle(id,body)
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: string){
    return this._articlesService.deleteArticle(id)
  }
}
