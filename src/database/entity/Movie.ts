import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { Genre } from './Genre';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column('simple-array')
  genre: string[];

  @Column({ length: 100 })
  director: string;

  @Column('int')
  releaseYear: number;

  @Column({ length: 20 })
  duration: string;

  @Column('smallint')
  rating: number;

  @Column('text')
  plot: string;

  // @ManyToOne(() => Genre, (genre) => genre.movies)
  // movie: Movie;

  // @Column('text')
  // imageURL: string;
}
