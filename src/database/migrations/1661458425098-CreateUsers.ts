import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1661458425098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'numeric',
            isPrimary: true,
          },
          {
            name: 'firstName',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'lastName',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '8',
          },
          {
            name: 'age',
            type: 'numeric',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
