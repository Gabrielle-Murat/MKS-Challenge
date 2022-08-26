import { Body, Controller, Post } from '@nestjs/common';
import LoginService from '../service/loginService';
import ILogin from '../interfaces/LoginInterface';
import IToken from '../interfaces/TokenInterface';

@Controller()
export default class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  async userLogin(@Body() login: ILogin): Promise<IToken> {
    const { email, password } = login;

    const token = await this.loginService.userLogin(email, password);

    return { token };
  }
}
