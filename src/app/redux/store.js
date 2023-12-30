
import { homeVideosReducer } from "./reducers/videos.reducer";

const { configureStore } = require("@reduxjs/toolkit");
export const store = configureStore({
    reducer: homeVideosReducer
})
