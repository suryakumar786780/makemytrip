import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./stateSlice";

export default configureStore({
  reducer: { counter: counterReducer },
});
