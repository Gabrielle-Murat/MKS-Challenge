// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class PopulateGenres1661457498137 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(
//       `
//       INSERT INTO genres (id, name)
//         VALUES
//       (1, 'action'),
//       (2, 'adventure'),
//       (3, 'drama'),
//       (4, 'crime'),
//       (5, 'thriller'),
//       (6, 'comedy');
//       `,
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.clearTable('genres');
//   }
// }
