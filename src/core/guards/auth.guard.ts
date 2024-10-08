import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _jwtService: JwtService) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()
    const { token } = req.headers
    const decoded = this._jwtService.verify(token, { secret: "MsM" })
    console.log(decoded);

    if (decoded) {
      req['author'] = decoded.id;
      return true
    } else {

      return false;
    }

  }
}
