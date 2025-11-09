import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  age: string;
  phone: string;
  address: string;
  department: string;
}

interface UserState {
  details: User[];
}

const initialState: UserState = {
  details: [
    {
      name: 'mk',
      age: '24',
      phone: '8667450761',
      address: 'salem',
      department: 'Engineering',
      id: 'c524eb9c-6fa6-40ab-b558-2c2a7681d3bd',
    },
    {
      name: 'suresh',
      age: '24',
      phone: '88856678',
      address: 'salem',
      department: 'Engineering',
      id: 'afef83cf-9441-42ae-8a71-9e63fd795029',
    },
     {
      name: 'suresh',
      age: '24',
      phone: '88856678',
      address: 'salem',
      department: 'Engineering',
      id: 'afef83cf-9441-42ae-8a71-9e63fd795029',
    },
     {
      name: 'suresh',
      age: '24',
      phone: '88856678',
      address: 'salem',
      department: 'Engineering',
      id: 'afef83cf-9441-42ae-8a71-9e63fd795029',
    },
     {
      name: 'suresh',
      age: '24',
      phone: '88856678',
      address: 'salem',
      department: 'Sales',
      id: 'afef83cf-9441-42ae-8a71-9e63fd795029',
    },
   
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.details.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.details.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.details[index] = action.payload;
      }
    },
    resetUsers: (state) => {
      state.details = [];
    },
  },
});

export const { addUser, resetUsers, updateUser } = userSlice.actions;
export default userSlice.reducer;
