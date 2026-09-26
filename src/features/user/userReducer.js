import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getLocationData from "../services/getLocationData";

async function fetchPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddres = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const res = await fetchPosition();
    const position = {
      latitude: res.coords.latitude,
      longitude: res.coords.longitude,
    };
    const data = await getLocationData(position);

    const address = `${data.city},${data.locality},${data.principalSubdivision},${data.countryName}`;

    return { position, address };
  },
);

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddres.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "success";
      })
      .addCase(fetchAddres.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { updateUser } = userReducer.actions;
export default userReducer.reducer;
