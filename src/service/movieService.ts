import { Injectable } from '@nestjs/common';
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
    // return 'Movies are here';
    return movies;
  }
}
