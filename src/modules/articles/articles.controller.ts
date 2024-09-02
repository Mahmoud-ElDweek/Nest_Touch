import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { articleDTO } from './DTO/article.DTO';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('articles')
@UseGuards(AuthGuard)
export class ArticlesController {
  constructor(private readonly _articlesService: ArticlesService) { }


  @Post()
  async addArticle(@Body() body: articleDTO, @Req() req : any) {
    body.author = req['author']
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
