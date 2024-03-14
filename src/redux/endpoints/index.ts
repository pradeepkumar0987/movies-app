const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3bb9c1e2b145bcb705af235427696fa2';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmI5YzFlMmIxNDViY2I3MDVhZjIzNTQyNzY5NmZhMiIsInN1YiI6IjY1ZjAwZjVlMGUyOWEyMDE3YjM4MWU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g9K01xdzsnQ4hsSn_5IH0qThuOy3z-aUAxOF03hsMJk';

const EndPoint = {
  discover: 'movie/now_playing',
  genre: 'genre/movie/list',
  popular: 'movie/popular',
  RefreshToken: '',
  top_rated: 'movie/top_rated',
  upcoming: 'movie/upcoming',
  search: 'search/movie',
};

export {BASE_URL, EndPoint, API_KEY, ACCESS_TOKEN};
