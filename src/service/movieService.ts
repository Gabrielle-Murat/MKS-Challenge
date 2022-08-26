import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from '../database/data-source';
import { Movie } from '../database/entity/Movie';
import IMovie from '../interfaces/MovieInterface';

@Injectable()
export default class MovieService {
  async getAll(): Promise<IMovie[]> {
    const movies = await AppDataSource.createQueryBuilder()
      .select('movie')
      .from(Movie, 'movie')
      .getMany();

    if (!movies) {
      throw new HttpException('Movies not found', HttpStatus.NOT_FOUND);
    }
    return movies;
  }

  async postMovie(movieInfo: IMovie): Promise<IMovie> {
    const { title, genre, director, releaseYear, duration, rating, plot } =
      movieInfo;
    const doesMovieExist = await this.getMovie(movieInfo);

    if (!doesMovieExist) {
      const newMovie = await AppDataSource.createQueryBuilder()
        .insert()
        .into(Movie)
        .values({
          title,
          genre,
          director,
          releaseYear,
          duration,
          rating,
          plot,
        })
        .execute();

      const newMovieId = newMovie.identifiers[0].id;
      return {
        id: newMovieId,
        ...movieInfo,
      };
    }

    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Movie already exists',
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  async getMovie(movieInfo: IMovie): Promise<IMovie> {
    const { title, director, releaseYear } = movieInfo;
    const movie = await AppDataSource.createQueryBuilder()
      .select('movie')
      .from(Movie, 'movie')
      .where('movie.title = :title', { title })
      .andWhere('movie.director = :director', { director })
      .andWhere('movie.releaseYear = :releaseYear', { releaseYear })
      .getOne();

    return movie;
  }

  async getMovieById(movieId: number): Promise<IMovie> {
    const movie = await AppDataSource.createQueryBuilder()
      .select('movie')
      .from(Movie, 'movie')
      .where('movie.id = :id', { id: movieId })
      .getOne();

    if (!movie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }
    return movie;
  }

  async updateMovie(movieId: number, movieInfo: any): Promise<any> {
    const doesMovieExist = await this.getMovieById(movieId);

    if (!doesMovieExist) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }

    const { title, genre, director, releaseYear, duration, rating, plot } =
      movieInfo;

    await AppDataSource.createQueryBuilder()
      .update(Movie)
      .set({
        title,
        genre,
        director,
        releaseYear,
        duration,
        rating,
        plot,
      })
      .where('id = :id', { id: movieId })
      .execute();

    return 'Movie updated';
  }

  async deleteMovie(movieId: number): Promise<void> {
    const doesMovieExist = await this.getMovieById(movieId);

    if (!doesMovieExist) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }

    await AppDataSource.createQueryBuilder()
      .delete()
      .from(Movie)
      .where('id = :id', { id: movieId })
      .execute();
  }
}
