import { Body, Controller, Post } from '@nestjs/common';
import { loginDTO } from '../DTO/auth.DTO';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

constructor(private _loginService:LoginService){

}

    @Post()
    login(@Body() body: loginDTO) {
        return this._loginService.login(body)
    }
}
