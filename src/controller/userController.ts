import { Body, Controller, Post } from '@nestjs/common';
import IUser from '../interfaces/UserInterface';
import UserService from '../service/userService';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiResponseProperty,
} from '@nestjs/swagger';

@Controller()
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/user')
  @ApiCreatedResponse({ description: 'User Registered Successfully - token' })
  @ApiBadRequestResponse({ description: 'User already exists on database' })
  @ApiResponseProperty({ type: 'string' })
  async create(@Body() newUser: IUser): Promise<string> {
    return this.userService.postUser(newUser);
  }
}
