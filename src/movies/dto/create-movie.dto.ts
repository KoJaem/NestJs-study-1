import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true }) // { each: true } 유효성검사 필드가 배열일경우 각 요소를 검사하는 옵션
  readonly genres: Array<string>;
}
