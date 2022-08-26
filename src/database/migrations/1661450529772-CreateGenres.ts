// import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// export class CreateGenres1661450529772 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: 'genres',
//         columns: [
//           {
//             name: 'id',
//             type: 'numeric',
//             isPrimary: true,
//           },
//           {
//             name: 'name',
//             type: 'varchar',
//             isUnique: true,
//           },
//         ],
//       }),
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropTable('genres');
//   }
// }
