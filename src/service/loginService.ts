import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from '../database/data-source';
import { User } from '../database/entity/User';
import JwtService from '../middlewares/auth/JwtService';

@Injectable()
export default class LoginService {
  async userLogin(email: string, password: string): Promise<string> {
    const user = await AppDataSource.createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.email = :email', { email })
      .andWhere('user.password = :password', { password })
      .getOne();

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return JwtService.sign({ id: user.id, email });
  }
}
