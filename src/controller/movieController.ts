import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import MovieService from '../service/movieService';
import IMovie from '../interfaces/MovieInterface';

@Controller()
export default class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/movies')
  async findAll(): Promise<IMovie[]> {
    return this.movieService.getAll();
  }

  @Post('/movies')
  async create(@Body() newMovie: IMovie): Promise<IMovie> {
    return this.movieService.postMovie(newMovie);
  }

  @Get('/movies/:id')
  async findOne(@Param('id') id: string): Promise<IMovie> {
    const movieId = Number(id);
    return this.movieService.getMovieById(movieId);
  }

  @Put('/movies/:id')
  async update(
    @Param('id') id: string,
    @Body() movieInfo: IMovie,
  ): Promise<IMovie> {
    const movieId = Number(id);
    const response = await this.movieService.updateMovie(movieId, movieInfo);
    if (response === 'Movie updated')
      return this.movieService.getMovieById(movieId);
  }

  @Delete('/movies/:id')
  async remove(@Param('id') id: string): Promise<void> {
    const movieId = Number(id);
    await this.movieService.deleteMovie(movieId);
  }
}
