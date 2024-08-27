import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { signUpDTO } from '../DTO/auth.DTO';

@Controller('signup')
export class SignupController {


    constructor(private _signupService:SignupService){

    }
    @Post()
    signUp(@Body() body: signUpDTO){
        return this._signupService.signUp(body)
    }
}
