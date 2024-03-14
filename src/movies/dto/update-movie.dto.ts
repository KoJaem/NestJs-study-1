import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  // ⬆️ PartialType: base 가 되는 Dto 에서 일부값만 사용하고 싶을때 사용
}

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true }) // { each: true } 유효성검사 필드가 배열일경우 각 요소를 검사하는 옵션
//   readonly genres?: Array<string>;
// }
