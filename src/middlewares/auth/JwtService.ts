import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

const jwtConfig: jwt.SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = `${process.env.JWT_SECRET}`;

export default class JwtService {
  static sign(payload: { id: number; email: string }): string {
    return jwt.sign(payload, secret, jwtConfig);
  }

  static verify(token: string): number {
    const decoded = <jwt.JwtPayload>jwt.verify(token, secret);
    if (!decoded) return 401;
    const { id } = decoded;
    return id;
  }
}
