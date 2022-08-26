import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateUsers1661458562767 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      INSERT INTO users (id, "firstName", "lastName", email, password, age)
        VALUES
      (1, 'Gabrielle', 'Murat', 'gabi@gabi.com', '12345678', 34);
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('users');
  }
}
