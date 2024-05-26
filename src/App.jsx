// App.js
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import MovieListPage from './pages/MoviesListPage';
import FavoriteMoviesPage from './pages/FavoriteMoviesPage';
import { Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
 <nav className="bg-gray-800 flex p-4 mx-auto">
  <div className="container flex justify-center">
    <Link to="/" className="text-white text-lg  font-semibold hover:text-gray-300">Movie List</Link>
    <Link to="/favorites" className="text-white pl-6 text-lg font-semibold hover:text-gray-300">Favorite Movies</Link>
  </div>
</nav>

      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/favorites" element={<FavoriteMoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
