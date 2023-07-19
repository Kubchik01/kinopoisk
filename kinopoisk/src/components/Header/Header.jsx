import React, { useCallback, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { CircularProgress, IconButton, TextField } from "@mui/material";
import { HighQuality, Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import "../Header/Header.css";

import {
  getFilmsBySearch,
  getTopFilms,
  increment,
} from "../../features/topFilms/topFilmsSlice";
import { ClassNames } from "@emotion/react";

export default function Header() {
  const [search, setSearch] = useState("");

  const isLoading = useSelector((state) => state.topFilms.isLoading);

  const dispatch = useDispatch();

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const getFilms = useCallback(async () => {
    await dispatch(getTopFilms());
  }, [dispatch]);

  const handleSearch = async () => {
    await dispatch(getFilmsBySearch(search));
  };

  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return (
    <AppBar sx={{ backgroundColor: "#061016" }} position="static">
      <h1 className="header-title"> 𝙆𝙞𝙣𝙤𝙋𝙤𝙞𝙨𝙠 </h1>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          className="inputchik"
          color="warning"
          value={search}
          onChange={handleChangeSearch}
          InputProps={{
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <IconButton sx={{ color: "#fff" }} onClick={handleSearch}>
                    <Search />
                  </IconButton>
                )}
              </>
            ),
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
