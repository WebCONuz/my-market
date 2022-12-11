import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Created main module
  const app = await NestFactory.create(AppModule);

  // Use Validate
  app.useGlobalPipes(new ValidationPipe());

  // global prefix
  app.setGlobalPrefix('api');

  // Run Project
  const Port = process.env.PORT || 4001;
  await app.listen(Port, () => {
    console.log(`Loyiha ${Port}-portda ishga tushdi.`);
  });
}
bootstrap();
