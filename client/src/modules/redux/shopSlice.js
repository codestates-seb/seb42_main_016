import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API';
import { HAIRSHOP_ENDPOINT } from '../endpoints';

const token = localStorage.getItem('accessToken');
const refresh = localStorage.getItem('refresh');

const headers = {};

const asyncUpFetch = createAsyncThunk('shopSlice/asyncUpFetch', async (_, thunkAPI) => {
  const { id } = thunkAPI.getState().set;
  const { user } = thunkAPI.getState().user;

  if (user) {
    headers.Authorization = token;
    headers.Refresh = refresh;
  }

  const response = await API.get(`${HAIRSHOP_ENDPOINT}/${id}`, { headers: headers });
  return response.data;
});

const initialState = { value: [], status: 'idle' };

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setLikeCount: (state, action) => {
      state.value.likeCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncUpFetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(asyncUpFetch.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = 'succeeded';
      })
      .addCase(asyncUpFetch.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setLikeCount } = shopSlice.actions;

export { asyncUpFetch };

export const selectShop = (state) => state.shop.value.likeCount;

export default shopSlice.reducer;
