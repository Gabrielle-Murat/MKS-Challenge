import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Movie } from './entity/Movie';
// import { MovieMigration } from './migration/1661222422433-movies-migration';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Movie],
  // migrations: [MovieMigration],
  //   subscribers: [],
});
