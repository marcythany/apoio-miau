import {createSlice} from "@reduxjs/toolkit";

interface GatinhosCarrouselState {
	imageUrl: string | null;
}

const initialState: GatinhosCarrouselState = {
	imageUrl: null,
};

export const gatinhosCarrouselSlice = createSlice({
	name: "gatinhosCarrousel",
	initialState,
	reducers: {
		setImageUrl: (state, action) => {
			state.imageUrl = action.payload;
		},
	},
});

export const {setImageUrl} = gatinhosCarrouselSlice.actions;

export default gatinhosCarrouselSlice.reducer;
