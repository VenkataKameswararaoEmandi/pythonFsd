import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { value: "" },
  reducers: {
    addCount(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addCount } = todosSlice.actions;
export default todosSlice.reducer;
