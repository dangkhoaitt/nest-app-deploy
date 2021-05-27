import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import * as Express from 'express';
import { AppModule } from './app.module';

const server = Express();
server.use(cors());
server.get('/', (req, res) => res.send('ok'));
server.get('/_ah/health', (req, res) => res.send('ok'));
server.get('/_ah/start', (req, res) => res.send('ok'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();
