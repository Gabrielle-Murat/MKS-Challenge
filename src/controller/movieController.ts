import { Controller, Get } from '@nestjs/common';
import MovieService from '../service/movieService';
import IMovie from '../interfaces/MovieInterface';

@Controller()
export default class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/movies')
  async findAll(): Promise<IMovie[]> {
    return this.movieService.getAll();
  }
}
