import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  name: string;
}

const initialState: IUserState = {
  name: '',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
  },
});

export const { setName } = user.actions;

export default user.reducer;
