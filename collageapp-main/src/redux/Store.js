import { configureStore } from "@reduxjs/toolkit";
import Auth from "./slices/Loginndout";
export const store = configureStore({
  reducer: { Auth },
});
