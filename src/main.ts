import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './database/data-source';
// import { User } from './entity/User';
import { Movie } from './database/entity/Movie';
import 'reflect-metadata';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT);
}
bootstrap();

AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');
    await AppDataSource.dropDatabase();

    await AppDataSource.destroy();
    await AppDataSource.initialize();

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Movie)
      .values([
        {
          title: 'The Lord of the Rings: The Fellowship of the Ring',
          genre: ['action', 'adventure', 'drama'],
          director: 'Peter Jackson',
          releaseYear: 2001,
          duration: '2 h 58 min',
          rating: 12,
          plot: 'Um manso hobbit do Condado e oito companheiros partem em uma jornada para destruir o poderoso Um Anel e salvar a Terra-média das Trevas.',
        },
        {
          title: 'The Lord of the Rings: The Two Towers',
          genre: ['action', 'adventure', 'drama'],
          director: 'Peter Jackson',
          releaseYear: 2002,
          duration: '2 h 59 min',
          rating: 12,
          plot: 'Enquanto Frodo e Sam estão perto de Mordor com a ajuda de Gollum, a divida comunhão luta contra Saruman e os Isengards.',
        },
        {
          title: 'The Lord of the Rings: The Two Towers',
          genre: ['action', 'adventure', 'drama'],
          director: 'Peter Jackson',
          releaseYear: 2003,
          duration: '3 h 21 min',
          rating: 14,
          plot: 'Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar o olhar de Frodo e Sam quando eles se aproximam á Montanha da Perdição com o Um Anel.',
        },
        {
          title: 'John Wick',
          genre: ['action', 'crime', 'thriller'],
          director: 'Chad Stahelski',
          releaseYear: 2014,
          duration: '1 h 41 min',
          rating: 16,
          plot: 'Um ex-matador sai da aposentadoria para rastrear os gangsters que mataram seu cachorro e levaram tudo dele.',
        },
      ])
      .execute();
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
