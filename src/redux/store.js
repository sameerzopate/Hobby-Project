import { configureStore } from "@reduxjs/toolkit";
import { reducer,reducer1 } from "./reducer";


const store = configureStore({
  reducer: reducer,
  reducer1: reducer1,
});

export default store;