import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
// import { Req } from '@nestjs/common/decorators';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      // Request Header ni tekshirish
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        throw new UnauthorizedException({
          message: "Foydalanuvchi authorizatsiyadan o'tmagan 0",
        });
      }

      // Header dagi Tokenni tekshirish
      const bayer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];
      if (bayer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: "Foydalanuvchi avtorizatsiyadan o'tmagan 1",
        });
      }

      // Tokenni deshifrofka qilish
      const admin = this.jwtService.verify(token);

      // Requestga yuzerni yozib qo'yish
      req.admin = admin;

      return true;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException({
        message: "Foydalanuvchi avtorizatsiyadan o'tmagan 2",
      });
    }
  }
}
