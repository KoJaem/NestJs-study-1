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

@Controller('movies') // 전체 URL 역할
export class MoviesController {
  @Get() // 전체URL + 뒤에 붙을 URL
  getAll() {
    return 'This will return all movies';
  }

  @Get('/search')
  search(@Query('year') year: string) {
    return `We are searching for a movie made after ${year}`;
  }

  @Get('/:id') // get:/:id 가 위쪽에 있으면 다른 get 메소드가 이 부분에서 걸리므로 맨 아래에 위치하는것이 좋음
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
