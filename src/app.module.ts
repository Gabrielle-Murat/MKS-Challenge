import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import LoginController from './controller/loginController';
import MovieController from './controller/movieController';
import UserController from './controller/userController';
import { AuthMiddleware } from './middlewares/auth.middleware';
import LoginService from './service/loginService';
import MovieService from './service/movieService';
import UserService from './service/userService';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    MovieController,
    LoginController,
  ],
  providers: [AppService, UserService, MovieService, LoginService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(MovieController);
  }
}
