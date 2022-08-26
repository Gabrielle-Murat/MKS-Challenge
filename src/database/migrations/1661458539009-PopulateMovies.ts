import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateMovies1661458539009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      INSERT INTO movies (id, title, genre, director, "releaseYear", duration, rating, plot)
        VALUES
      (1, 'The Lord of the Rings: The Fellowship of the Ring', ARRAY ['action', 'adventure', 'drama'], 'Peter Jackson', 2001, '2 h 58 min', 12, 'Um manso hobbit do Condado e oito companheiros partem em uma jornada para destruir o poderoso Um Anel e salvar a Terra-média das Trevas.'),
      (2, 'The Lord of the Rings: The Two Towers', ARRAY ['action', 'adventure', 'drama'], 'Peter Jackson', 2002, '2 h 59 min', 14, 'Enquanto Frodo e Sam estão perto de Mordor com a ajuda de Gollum, a divida comunhão luta contra Saruman e os Isengards.'),
      (3, 'The Lord of the Rings: The Return of the King', ARRAY ['action', 'adventure', 'drama'], 'Peter Jackson', 2003, '3 h 21 min', 16, 'Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar o olhar de Frodo e Sam quando eles se aproximam á Montanha da Perdição com o Um Anel.'),
      (4, 'John Wick', ARRAY ['action', 'crime', 'thriller'], 'Chad Stahelski', 2014, '1 h 41 min', 16, 'Um ex-matador sai da aposentadoria para rastrear os gangsters que mataram seu cachorro e levaram tudo dele.');
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('movies');
  }
}
