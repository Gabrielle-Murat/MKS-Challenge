// import { MigrationInterface, QueryRunner } from 'typeorm';
// import { Movie } from '../entity/Movie';

// export class MovieMigration implements MigrationInterface {
//   async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.manager
//       .createQueryBuilder()
//       .insert()
//       .into(Movie)
//       .values([
//         {
//           title: 'The Lord of the Rings: The Fellowship of the Ring',
//           genre: ['action', 'adventure', 'drama'],
//           director: 'Peter Jackson',
//           releaseYear: 2001,
//           duration: '2 h 58 min',
//           rating: 12,
//           plot: 'Um manso hobbit do Condado e oito companheiros partem em uma jornada para destruir o poderoso Um Anel e salvar a Terra-média das Trevas.',
//         },
//         {
//           title: 'The Lord of the Rings: The Two Towers',
//           genre: ['action', 'adventure', 'drama'],
//           director: 'Peter Jackson',
//           releaseYear: 2002,
//           duration: '2 h 59 min',
//           rating: 12,
//           plot: 'Enquanto Frodo e Sam estão perto de Mordor com a ajuda de Gollum, a divida comunhão luta contra Saruman e os Isengards.',
//         },
//         {
//           title: 'The Lord of the Rings: The Two Towers',
//           genre: ['action', 'adventure', 'drama'],
//           director: 'Peter Jackson',
//           releaseYear: 2003,
//           duration: '3 h 21 min',
//           rating: 14,
//           plot: 'Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar o olhar de Frodo e Sam quando eles se aproximam á Montanha da Perdição com o Um Anel.',
//         },
//         {
//           title: 'John Wick',
//           genre: ['action', 'crime', 'thriller'],
//           director: 'Chad Stahelski',
//           releaseYear: 2014,
//           duration: '1 h 41 min',
//           rating: 16,
//           plot: 'Um ex-matador sai da aposentadoria para rastrear os gangsters que mataram seu cachorro e levaram tudo dele.',
//         },
//       ])
//       .execute();
//   }

//   async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.clearTable('movie');
//   }
// }
