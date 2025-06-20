import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function boostrap() {
    const app = await NestFactory.create(AppModule);

    app.listen(3000)
}

boostrap();