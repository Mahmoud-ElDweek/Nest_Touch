import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './modules/articles/articles.module';
import { TagsModule } from './modules/tags/tags.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-touch'),
    AuthModule,
    ArticlesModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
