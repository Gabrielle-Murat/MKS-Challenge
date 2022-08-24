import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../database/data-source';
import { User } from '../database/entity/User';
// import { ILogin } from '../interfaces/LoginInterface';
import IUser from '../interfaces/UserInterface';
import JwtService from '../middlewares/auth/JwtService';

@Injectable()
export default class UserService {
  async postUser(userInfo: IUser): Promise<string> {
    const { firstName, lastName, email, password, age } = userInfo;

    const doesUserExist = await this.getUser(email);

    if (!doesUserExist) {
      const newUser = await AppDataSource.createQueryBuilder()
        .insert()
        .into(User)
        .values({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          age: age,
        })
        .execute();

      const newUserId = newUser.identifiers[0].id;
      // console.log(newUserId);

      const token = JwtService.sign({ id: newUserId, email });
      // return 'User created';
      return token;
    }
    return 'User already exists';
  }

  async getUser(userEmail: string): Promise<IUser> {
    const user = await AppDataSource.createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.email = :email', { email: userEmail })
      .getOne();

    return user;
  }
}