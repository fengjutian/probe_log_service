import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true
  });
  app.enableCors();
  await app.listen(9000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
