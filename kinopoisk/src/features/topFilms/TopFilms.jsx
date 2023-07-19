import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import "./topFilms.css";
import { useNavigate } from "react-router-dom";

const TopFilms = () => {
  const isLoading = useSelector((state) => state.topFilms.isLoading);
  const films = useSelector((state) => state.topFilms.films);
  const navigate = useNavigate();

  const filmsBySearch = useSelector((state) => state.topFilms.filmsBySearch);
  console.log("filmsBySearch: ", filmsBySearch);

  const handleNavigete = (id) => {
    navigate(`/films/${id}`);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="container">
      {filmsBySearch.length === 0
        ? films.map((item) => (
            <>
              <div className="card">
                <h4 key={item.filmId}>{item.nameRu}</h4>
                <img src={item.posterUrlPreview} alt="image" />
                <p key={item.filmId}> Год выпуска: {item.year}</p>
                <ul>
                  Жанров фильмов:
                  {item.genres.map((value) => (
                    <li>{value.genre}</li>
                  ))}
                </ul>
                <ul>
                  Где снято:
                  {item.countries.map((value) => (
                    <li>{value.country}</li>
                  ))}
                </ul>

                <p key={item.filmId}> Рейтинг: {item.rating}</p>
                <button
                  className="knob"
                  onClick={() => handleNavigete(item.filmId)}
                  key={item.filmId}
                >
                  Подробнее!
                </button>
              </div>
            </>
          ))
        : filmsBySearch.map((item) => (
            <div className="card">
              <h4 key={item.filmId}>{item.nameRu}</h4>
              <img src={item.posterUrlPreview} alt="image" />
              <p key={item.filmId}> Год выпуска: {item.year}</p>
              <ul>
                Жанров фильмов:
                {item.genres.map((value) => (
                  <li>{value.genre}</li>
                ))}
              </ul>

              <p key={item.filmId}> Рейтинг: {item.rating}</p>
              <button
                className="knob"
                onClick={() => handleNavigete(item.filmId)}
                key={item.filmId}
              >
                Подробнее!
              </button>
            </div>
          ))}
    </div>
  );
};

TopFilms.propTypes = {};

export default TopFilms;
