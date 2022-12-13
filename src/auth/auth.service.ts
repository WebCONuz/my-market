import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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

  // Register Admin Service ----------------------------------------------------------
  /* async registration(registerDto: RegisterDto) {
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
  }  */

  // Login Admin Service -------------------------------------------------------------
  async login(loginDto: LoginDto) {
    // Validate admin
    const admin = await this.validateAdmin(loginDto);
    if (!admin) {
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);
    }

    const token = this.generateToken(admin);
    // Generated Tokens
    return token;
  }

  // Get all Admin Service -----------------------------------------------------------
  async getAll() {
    return await this.adminRepository.findAll({ include: { all: true } });
  }

  // Generated Token Method ----------------------------------------------------------
  private async generateToken(admin: Admin) {
    const payload = { id: admin.id, email: admin.email };
    return { token: this.jwtService.sign(payload) };
  }

  // Validate Token Mothod -----------------------------------------------------------
  private async validateAdmin(loginDto: LoginDto) {
    const admin = await this.adminRepository.findOne({
      where: { email: loginDto.email },
      include: { all: true },
    });
    if (!admin) {
      throw new UnauthorizedException('Email yoki parol xato');
    }
    const validPassword = await bcrypt.compare(
      loginDto.password,
      admin.password,
    );
    if (admin && validPassword) {
      return admin;
    }

    throw new UnauthorizedException('Email yoki parol xato');
  }
}
