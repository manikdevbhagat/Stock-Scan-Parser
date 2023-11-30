import { createSlice } from "@reduxjs/toolkit";

interface State {
  data: Scan[];
}

const initialState: State = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData} = dataSlice.actions;
export const dataReducer = dataSlice.reducer;