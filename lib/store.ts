import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from "./features/tasks/tasksSlice";
import datesReducer from "./features/dates/datesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      tasks: tasksReducer,
      dates: datesReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']