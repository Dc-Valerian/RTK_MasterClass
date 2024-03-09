// WHERE INFORMATION ARE BEING GOTTEN FROM OR RECREIVED

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers";

export const store = configureStore({
  reducer: {
    CounterReducer,
  },
});
