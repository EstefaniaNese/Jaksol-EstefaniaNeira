import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '../apollo/client';

export const fetchMachines = createAsyncThunk('machines/fetchMachines', async () => {
  const { data } = await client.query({
    query: gql`
      query GetMachines {
        machines {
          id
          name
          status
          health
          healthHistory {
            date
            health
          }
          lastMaintenance
        }
      }
    `,
  });
  return data.machines;
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

export default machineSlice.reducer;