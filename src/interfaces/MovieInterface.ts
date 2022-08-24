interface IMovie {
  id?: number;
  title: string;
  genre: string[];
  director: string;
  releaseYear: number;
  duration: string;
  rating: number;
  plot: string;
}

export default IMovie;
