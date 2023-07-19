import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmAwards, getFilmDetails } from "./filmDetailsSlice";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import "./FilmDetails.css";

const FilmDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const currentFilm = useSelector((state) => state.FilmDetails.currentFilm);
  console.log("currentFilm: ", currentFilm);

  const getFilm = useCallback(async () => {
    dispatch(getFilmDetails(params.filmId));
  }, [dispatch, params]);

  useEffect(() => {
    getFilm();
  }, [getFilm]);

  const getAwards = async () => {
    const resp = await dispatch(getFilmAwards(params.filmId));
    console.log("resp: ", resp);
  };

  if (!currentFilm) {
    return <CircularProgress />;
  }

  return (
    <div className="container2">
      <div className="card">
        <h1>{currentFilm.nameRu}</h1>

        <img className="card_img" src={currentFilm.posterUrlPreview} />
        <p> Год выпуска: {currentFilm.year}</p>

        <h2>Сюжет фильма:</h2>
        <p>{currentFilm.description}</p>
        <h3>
          Ограничение по возрасту для просмотра фильма:
          {currentFilm.ratingAgeLimits}
        </h3>
        <button className="card-button" onClick={getAwards}>
          Награды и премии
        </button>
      </div>
      <div className="card">
        <h1>Трейлер фильма можете посмотреть в YouTube</h1>
        <iframe
          className="card-video"
          width="300px"
          height="400px"
          src="https://www.youtube.com/embed/FrOG4_kMEy8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h2>Тип фильма:{currentFilm.type}</h2>
        <h5>
          Если вам нужно детальная информация о фильме,можете скопировать url,и
          поставить поиск google <br />
          <br /> <a>{currentFilm.webUrl}</a>
        </h5>
      </div>
    </div>
  );
};

FilmDetails.prototype = {};

export default FilmDetails;
