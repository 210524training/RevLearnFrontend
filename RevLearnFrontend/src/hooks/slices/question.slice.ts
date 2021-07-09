import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import QuizQuestion from '../../models/QuizQuestion';
import { RootState } from '../store';

export type QuestionState = QuizQuestion[];

export const questionSlice = createSlice({
  name: 'questions',
  initialState: [] as QuizQuestion[],
  reducers: {
    addQuestion: (state, action: PayloadAction<QuizQuestion>) => [...state, action.payload],
    clear: (state) => [],
  },
});

export const { addQuestion, clear } = questionSlice.actions;

export const getQuestions = (state: RootState) => state.question;

export default questionSlice.reducer;
