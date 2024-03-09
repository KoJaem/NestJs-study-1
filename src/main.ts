import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO 설정이 되지않은 key 값을 넣은 경우 해당 key 값을 무시
      forbidNonWhitelisted: true, // whitelist: true 설정이 되어있는 상태에서 DTO 설정이 되지않은 key 값을 넣은 경우 에러반환
      transform: true, // 유저들이 보낸값을 필요에맞게 타입을 변환해줌 (ex: string -> number)
    }),
  ); // DTO 검사 (* npm i class-validator class-transformer)
  await app.listen(3000);
}
bootstrap();
