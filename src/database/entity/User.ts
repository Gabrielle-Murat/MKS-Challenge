import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 8 })
  password: string;

  @Column('int')
  age: number;
}
