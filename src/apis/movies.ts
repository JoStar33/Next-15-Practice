import { MovieList } from '@/types/movie';
import environment from '@/environment';
import { requests } from '.';

export async function getMovieList({ page }: { page: number }) {
  const res = await requests.get<{ data: MovieList }>(`${environment.movieServerUrl}?page=${page}`);
  const { data } = res;
  return data;
}
