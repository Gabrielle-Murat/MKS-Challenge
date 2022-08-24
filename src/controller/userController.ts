import { Body, Controller, Post } from '@nestjs/common';
import IUser from '../interfaces/UserInterface';
import UserService from '../service/userService';

@Controller()
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/user')
  async create(@Body() newUser: IUser): Promise<string> {
    return this.userService.postUser(newUser);
  }
}
