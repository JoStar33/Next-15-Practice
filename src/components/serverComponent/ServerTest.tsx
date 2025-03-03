import React from 'react';
import { getMovieList } from '@/apis/movies';

export default async function ServerTest() {
  const movieList = await getMovieList({ page: 1 });

  // 서버 컴포넌트에서 클라이언트 컴포넌트를 import시에는 에러가 발생하지않음.

  return (
    <div className="flex items-center font-bold">
      {movieList.movies.map((element, index) => (
        <div key={index}>{element.title}</div>
      ))}
    </div>
  );
}
