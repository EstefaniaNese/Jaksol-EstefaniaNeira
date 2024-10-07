import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import machinesData from '../data/machines.json';

export const fetchMachines = createAsyncThunk('machines/fetchMachines', async () => {
  return machinesData;
});

const machineSlice = createSlice({
  name: 'machines',
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMachines.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { } = machineSlice.actions;
export default machineSlice.reducer;