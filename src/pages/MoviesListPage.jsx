// src/pages/MovieList.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import MovieCard from '../components/MovieCard';

const MoviesListPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  return (
    
    <>
      <h1 className=" flex justify-center pl-10 mt-10  font-bold tracking-tightn text-black sm:text-3xl">
        <span className=" border-b-4  flex justify-center ">Movies List</span>
      </h1>
    <div  className="mx-auto grid w-full  max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">

    {movies.map((movie, index) => (
      <div key={index} className=" shadow-xl  aspect-w-2 aspect-h-3">
        <MovieCard index={index} movie={movie} />
      </div>
    ))}
    </div>
    </>
 
  );
};

export default MoviesListPage;
