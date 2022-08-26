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
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller()
export default class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/movies')
  @ApiUnauthorizedResponse({ description: 'Unauthorized User - Token missing' })
  @ApiOkResponse({ description: 'Movies list' })
  @ApiNotFoundResponse({ description: 'No movies were found' })
  async findAll(): Promise<IMovie[]> {
    return this.movieService.getAll();
  }

  @Post('/movies')
  @ApiUnauthorizedResponse({ description: 'Unauthorized User - Token missing' })
  @ApiOkResponse({ description: 'Movie created' })
  @ApiBadRequestResponse({ description: 'Movie already exists on database' })
  async create(@Body() newMovie: IMovie): Promise<IMovie> {
    return this.movieService.postMovie(newMovie);
  }

  @Get('/movies/:id')
  @ApiUnauthorizedResponse({ description: 'Unauthorized User - Token missing' })
  @ApiOkResponse({ description: 'Found Movie By Id' })
  @ApiNotFoundResponse({ description: 'Movie not found on database' })
  async findOne(@Param('id') id: string): Promise<IMovie> {
    const movieId = Number(id);
    return this.movieService.getMovieById(movieId);
  }

  @Put('/movies/:id')
  @ApiUnauthorizedResponse({ description: 'Unauthorized User - Token missing' })
  @ApiOkResponse({ description: 'Movie Updated' })
  @ApiNotFoundResponse({ description: 'Movie not found on database' })
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
  @ApiUnauthorizedResponse({ description: 'Unauthorized User - Token missing' })
  @ApiOkResponse({ description: 'Movie Deleted' })
  @ApiNotFoundResponse({ description: 'Movie not found on database' })
  async remove(@Param('id') id: string): Promise<void> {
    const movieId = Number(id);
    await this.movieService.deleteMovie(movieId);
  }
}
