import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';
import { RegisterDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Register Admin Controller
  // @Post('/register')
  // register(@Body() registerDto: RegisterDto) {
  //   return this.authService.registration(registerDto);
  // }

  // Login Admin Controller
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  // Get all Admin Controller
  @UseGuards(JwtAuthGuard)
  @Get('/admins')
  getAll() {
    return this.authService.getAll();
  }
}
