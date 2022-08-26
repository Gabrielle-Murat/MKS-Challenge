import { Body, Controller, Post } from '@nestjs/common';
import LoginService from '../service/loginService';
import ILogin from '../interfaces/LoginInterface';
import IToken from '../interfaces/TokenInterface';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponseProperty,
} from '@nestjs/swagger';

@Controller()
export default class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  @ApiOkResponse({ description: 'User Logged - token' })
  @ApiResponseProperty({ type: 'string' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async userLogin(@Body() login: ILogin): Promise<IToken> {
    const { email, password } = login;

    const token = await this.loginService.userLogin(email, password);

    return { token };
  }
}
