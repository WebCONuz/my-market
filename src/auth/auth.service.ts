import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register-auth.dto';
import { Admin } from './admin.model';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Admin) private adminRepository: typeof Admin,
    private readonly jwtService: JwtService,
  ) {}

  // Register Admin Service
  async registration(registerDto: RegisterDto) {
    // Checked new admin
    const admin = await this.adminRepository.findOne({
      where: { email: registerDto.email },
      include: { all: true },
    });
    if (admin) {
      throw new HttpException(
        'Bunday email bazada mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Hashed Password
    const hashPassword = await bcrypt.hash(registerDto.password, 7);

    // Created new admin
    const newAdmin = await this.adminRepository.create({
      ...registerDto,
      password: hashPassword,
    });

    // Generated Tokens
    return this.generateToken(newAdmin);
  }

  // Generated Access & Refresh Method
  private async generateToken(admin: Admin) {
    const payload = { id: admin.id, email: admin.email };
    return { token: this.jwtService.sign(payload) };
  }
}
