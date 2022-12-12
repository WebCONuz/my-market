import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Register Admin Controller
  @Post()
  register(@Body() registerDto: RegisterDto) {
    return this.authService.registration(registerDto);
  }
}
