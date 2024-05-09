import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Citas Schedule Tracker')
    .setDescription('CST APIREST BackEnd')
    .setVersion('1.0')
    .addTag('cst')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  //cambiar el puto de escucha si estas usando tambien el frontend
  await app.listen(3005);
  console.log(`Nest application is running on: http://localhost:3005`);
}
bootstrap();
