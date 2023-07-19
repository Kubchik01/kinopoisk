import { create } from "@mui/material/styles/createTransitions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../requester";

const initialState = {
  currentFilm: {},
  isLoading: false,
  awards: {},
};

export const getFilmDetails = createAsyncThunk("filmDetails", async (id) => {
  console.log("id: ", id);
  const responce = await API.get(id);
  return responce.data;
});

export const getFilmAwards = createAsyncThunk("filmAwards", async (id) => {
  const responce = await API.get(`${id}/awards`);
  return responce.data;
});

const filmDetailsSlice = createSlice({
  name: "filmDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFilmDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilmDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentFilm = action.payload;
    });
    builder.addCase(getFilmAwards.fulfilled, (state, action) => {
      state.awards = action.payload;
    });
  },
});

export default filmDetailsSlice.reducer;
