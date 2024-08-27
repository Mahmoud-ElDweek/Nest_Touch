import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { LoginController } from './login/login.controller';
import { SignupService } from './signup/signup.service';
import { LoginService } from './login/login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [SignupController,LoginController],
    providers:[SignupService,LoginService,JwtService]
})
export class AuthModule {}
