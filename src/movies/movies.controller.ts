import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies') // 전체 URL 역할
export class MoviesController {
  @Get() // 전체URL + 뒤에 붙을 URL
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id') // 전체URL + 뒤에 붙을 URL
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }
}
