import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Array<Movie> = []; // fake DB

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id); // parseInt(id) === +id
  }

  deleteOne(id: string): boolean {
    console.log(this.movies);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    console.log(this.movies);
    return true;
  }

  create(movieData) {
    return this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
