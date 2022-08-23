import ILogin from './LoginInterface';

interface IUser extends ILogin {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
}

export default IUser;
