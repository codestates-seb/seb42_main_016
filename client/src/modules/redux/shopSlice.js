import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import API from '../API';

const asyncUpFetch = createAsyncThunk('shopSlice/asyncUpFetch', async (_, thunkAPI) => {
	const {id} = thunkAPI.getState().set;
	const response = await API.get(`/hair-shops/${id}`);
	return response.data;
});

const initialState = {value: [], status: 'idle'};

const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		addLike: (state) => {
			state.value.likeCount++;
		},
		cancleLike: (state) => {
			state.value.likeCount--;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(asyncUpFetch.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(asyncUpFetch.fulfilled, (state, action) => {
				state.value = action.payload;
				state.status = 'succeeded';
			})
			.addCase(asyncUpFetch.rejected, (state, action) => {
				state.status = 'failed';
			});
	},
});

export const {addLike, cancleLike} = shopSlice.actions;

export {asyncUpFetch};

export const selectShop = (state) => state.shop.value;

export default shopSlice.reducer;
