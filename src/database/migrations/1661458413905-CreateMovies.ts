import {
  MigrationInterface,
  QueryRunner,
  Table,
  // TableForeignKey,
} from 'typeorm';

export class CreateMovies1661458413905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'numeric',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'genre',
            type: 'varchar',
            isArray: true,
          },
          {
            name: 'director',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'releaseYear',
            type: 'numeric',
          },
          {
            name: 'duration',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'rating',
            type: 'numeric',
          },
          {
            name: 'plot',
            type: 'varchar',
          },
        ],
        // foreignKeys: [
        //   {
        //     name: 'movies',
        //     columnNames: ['genre'],
        //     referencedTableName: 'genres',
        //     referencedColumnNames: ['id'],
        //   },
        // ],
      }),
    );
    // outro jeito de fazer association
    // await queryRunner.createForeignKey(
    //   'movies',
    //   new TableForeignKey({
    //     columnNames: ['genre'],
    //     referencedTableName: 'genres',
    //     referencedColumnNames: ['id'],
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
