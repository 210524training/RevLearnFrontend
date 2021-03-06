import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { User } from '../../models/User';
import { sendLogin } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { RootState } from '../store';

export type UserState = User | null;

export type LoginCredentials = {
  username: string;
  password: string;
}

export function isAxiosError(error: any): error is AxiosError {
  return 'isAxiosError' in error;
}

export const loginAsync = createAsyncThunk<User, LoginCredentials>(
  'user/login/async',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await sendLogin(username, password);

      return response;
    } catch(error) {
      console.log(`error is an AxiosError: ${isAxiosError(error)}`);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: null as UserState,
  reducers: {
    login: (state, action: PayloadAction<User>) => action.payload,
    logout: (state) => null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        // return null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => action.payload)
      .addCase(loginAsync.rejected, (state, action) => {
        console.log(action.error);
        throw new Error('Invalid credentials');
      });
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
