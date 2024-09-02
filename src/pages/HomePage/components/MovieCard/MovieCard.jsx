import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path})`,
      }}
      className="movie-card"
    >
      <div className="movie-card__overlay  p-4">
        <h1 className="pb-2">{movie.title}</h1>
        <div className="movie-badge">
          {movie.genre_ids.map((id, index) => (
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
