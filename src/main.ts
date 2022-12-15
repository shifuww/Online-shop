import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Blog-service').setDescription('Light social media for noobs')
  .setVersion('1.0.0').addTag('Study plan').build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/config', app, document);

  await app.listen(PORT, () => console.log(`Server start on PORT = ${PORT}!`));
}
bootstrap();
