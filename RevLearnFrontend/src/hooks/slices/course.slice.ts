import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from '../../models/Course';
import { RootState } from '../store';

export type CourseState = Course | null;

export const courseSlice = createSlice({
  name: 'course',
  initialState: null as CourseState,
  reducers: {
    setCourse: (state, action: PayloadAction<Course | null>) => action.payload,
    clear: () => null,
  },
});

export const { setCourse, clear } = courseSlice.actions;

export const getCourse = (state: RootState) => state.course;

export default courseSlice.reducer;
