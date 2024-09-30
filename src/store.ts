import { configureStore } from "@reduxjs/toolkit";
import endOfLifeSlice from "./services/endoflife";

const store = configureStore({
  reducer: {
    eol: endOfLifeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
