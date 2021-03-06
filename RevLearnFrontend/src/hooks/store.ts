import { AnyAction } from 'redux';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import questionReducer from './slices/question.slice';
import userReducer from './slices/user.slice';
import courseReducer from './slices/course.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
    course: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export default store;
