import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { loginDTO } from '../DTO/auth.DTO';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private _jwtService: JwtService,

    ) { }

    login = async (info: loginDTO) => {
        const user = await this.userModel.findOne({ email: info.email });

        if (user && (await bcrypt.compare(info.password, user.password))) {
            const token = this._jwtService.sign({name:user.name,email:user.email},{secret:"MsM"})
            return {message: "welcome", "token": token};
        } else {
            throw new HttpException(
                'E-mail or password invalid',
                HttpStatus.BAD_REQUEST,
            );
        }
    };
}
