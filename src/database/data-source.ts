import 'reflect-metadata';
import { DataSource } from 'typeorm';
// import { User } from './entity/User';
// import { Movie } from './entity/Movie';
import 'dotenv/config';
// import { CreateGenres1661450529772 } from './migrations/1661450529772-CreateGenres';
import { CreateMovies1661458413905 } from './migrations/1661458413905-CreateMovies';
import { CreateUsers1661458425098 } from './migrations/1661458425098-CreateUsers';
// import { PopulateGenres1661457498137 } from './migrations/1661458527824-PopulateGenres';
import { PopulateMovies1661458539009 } from './migrations/1661458539009-PopulateMovies';
import { PopulateUsers1661458562767 } from './migrations/1661458562767-PopulateUsers';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [
    // CreateGenres1661450529772,
    CreateMovies1661458413905,
    CreateUsers1661458425098,
    // PopulateGenres1661457498137,
    PopulateMovies1661458539009,
    PopulateUsers1661458562767,
  ],
});
