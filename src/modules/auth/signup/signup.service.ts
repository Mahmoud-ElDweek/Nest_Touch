import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { signUpDTO } from '../DTO/auth.DTO';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(body: signUpDTO) {
    const user = await this.userModel.findOne({ email: body.email });
    if (user) throw new HttpException('email exist', HttpStatus.CONFLICT);

    body.password = await bcrypt.hash(body.password, 8);
    const newUser = await this.userModel.insertMany(body);
    return {message: "Register Success!", newUser};
  }
}
