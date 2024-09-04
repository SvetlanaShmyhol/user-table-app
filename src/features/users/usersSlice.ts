import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Draft } from 'immer';
import axios from 'axios';
import { RootState } from '../../app/rootReducer';
import { User, UserState } from '../../types';

const initialState: UserState = {
  users: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: null
  }
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data; 
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (state: Draft<UserState>, action: PayloadAction<{ field: keyof UserState['filters']; value: string | number }>) => {
      const { field, value } = action.payload;
      
      if (field === 'phone') {
        (state.filters[field] as number | null) = Number(value) || null;
      } else {
        (state.filters[field] as string) = value as string;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state: Draft<UserState>, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    });
  }
});

export const { setFilter } = usersSlice.actions;

export const selectUsers = (state: RootState) => {
  const { users, filters } = state.users;

  return users.filter(user =>
    user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
    user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
    (filters.phone === null || user.phone !== null && user.phone.toString().includes(filters.phone.toString()))
  );
};

export default usersSlice.reducer;
