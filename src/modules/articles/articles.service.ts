import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schemas/articles.schema';
import { articleDTO } from './DTO/article.DTO';

@Injectable()
export class ArticlesService {

    constructor(@InjectModel(Article.name) private articleModel: Model<Article> ){}


    addArticle = async(body: articleDTO) => {
        const addedArticle = await this.articleModel.insertMany(body);
        
        return {message: "Article Added", addedArticle}
    }

    getAllArticles = async () => {
        const allArticles = await this.articleModel.find()
        return {message: "All Articles", allArticles}
    }

    getArticleById = async (id: string) => {
        const articleById = await this.articleModel.findById(id)
    return {message: "articleById", articleById}
    }


    updateArticle = async (id: string, body: articleDTO) => {
        const updatedArticle = await this.articleModel.findByIdAndUpdate(id,body, { new: true })
    return {message: "Updated", updatedArticle}
    }


    deleteArticle = async (id: string) => {
        const deletedArticle = await this.articleModel.findByIdAndDelete(id)
    return {message: "deletedArticle", deletedArticle}
    }
}
