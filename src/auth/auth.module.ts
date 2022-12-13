import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin.model';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    // Read DB by Sequelize
    SequelizeModule.forFeature([Admin]),
    // Worked JWT
    JwtModule.register({
      secret: process.env.PRIVETE_KEY || 'SeCrEt',
      signOptions: { expiresIn: '30m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  // Global Modules
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
