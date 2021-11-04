import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

export const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { changeName } = usernameSlice.actions;

export default usernameSlice.reducer;
