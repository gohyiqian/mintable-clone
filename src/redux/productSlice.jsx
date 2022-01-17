import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const getNFTs = createAsyncThunk(
  "products/getNFTs",
  // action payload creator callback function
  async () => {
    try {
      const res = await fetch(
        "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20"
      );
      //   console.log(res);
      let data = await res.json();
      console.log(data);
      return data["assets"];
    } catch (err) {
      console.log(err);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    nfts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNFTs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNFTs.fulfilled, (state, action) => {
        state.nfts = action.payload;

        state.status = "success";
      })
      .addCase(getNFTs.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { actions } = productSlice;
export const productReducer = productSlice.reducer;
