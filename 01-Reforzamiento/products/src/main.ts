import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //! Se agrega el prefix que se requiera
  app.setGlobalPrefix('ms')

  //! Global pipes para poder hacer uso de los validaciones de los dto
  app.useGlobalPipes( 
    new ValidationPipe({ 
      whitelist: true, 
      forbidNonWhitelisted: true, 
    }) 
  );
  
  await app.listen(envs.port);
  console.log(`Server running on port ${envs.port}`);
}
bootstrap();
