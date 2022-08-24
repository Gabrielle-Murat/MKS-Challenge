import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import MovieController from './controller/movieController';
import UserController from './controller/userController';
import MovieService from './service/movieService';
import UserService from './service/userService';

@Module({
  imports: [],
  controllers: [AppController, UserController, MovieController],
  providers: [AppService, UserService, MovieService],
})
export class AppModule {}
