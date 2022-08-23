import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 60 })
  genre: string;

  @Column({ length: 100 })
  director: string;

  @Column('int')
  releaseYear: number;

  @Column('text')
  imageURL: string;

  @Column('text')
  plot: string;
}
