import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // 전체 URL 역할
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get() // 전체URL + 뒤에 붙을 URL
  getAll(): Array<Movie> {
    return this.moviesService.getAll();
  }

  @Get('/search')
  search(@Query('year') year: string) {
    return `We are searching for a movie made after ${year}`;
  }

  @Get('/:id') // get:/:id 가 위쪽에 있으면 다른 get 메소드가 이 부분에서 걸리므로 맨 아래에 위치하는것이 좋음
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id') // PUT 은 특정데이터의 전체 데이터를 수정 / PATCH 는 일부 데이터를 수정
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
