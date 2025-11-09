import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    details: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.details.push(action.payload);
    },
    resetUsers: (state) => {
      state.details = [];
    },
  },
});

export const { addUser, resetUsers } = userSlice.actions;
export default userSlice.reducer;
