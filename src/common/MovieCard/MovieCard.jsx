import { Badge } from "react-bootstrap";
import { useMovieGenreQuery } from "../../hooks/useMovieGenres";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path})`,
      }}
      className="movie-card"
    >
      <div className="movie-card__overlay">
        <h2>{movie.title}</h2>
        <div className="movie-badge">
          {showGenre(movie.genre_ids)
            .slice(0, 5)
            .map((id, index) => (
              <Badge bg="danger" key={index}>
                {id}
              </Badge>
            ))}
        </div>
        <div className="movie-card__info">
          <h4>{movie.vote_average}</h4>
          <strong>{movie.popularity}</strong>
          <span>{movie.adult ? <i className="adult">19</i> : <i>ALL</i>}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
