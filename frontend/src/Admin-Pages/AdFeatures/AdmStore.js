import { CourseApi } from "../AdminApi/CourseNameApi";
import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice";
import { UserApi } from "../AdminApi/UserApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    userInfo:userSlice,
    [CourseApi.reducerPath]: CourseApi.reducer,
    [UserApi.reducerPath]:UserApi.reducer,
    
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([CourseApi.middleware,UserApi.middleware]),
})