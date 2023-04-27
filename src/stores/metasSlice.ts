import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Meta {
	titulo: string;
	valor: number;
	data?: string;
	dataAlcancada?: string;
}

interface MetasState {
	metas: Meta[];
}

const initialState: MetasState = {
	metas: [],
};

export const metasSlice = createSlice({
	name: "metas",
	initialState,
	reducers: {
		alcancarMeta: (state, action: PayloadAction<Meta>) => {
			const meta = state.metas.find(
				(meta) => meta.titulo === action.payload.titulo,
			);
			if (meta) {
				meta.dataAlcancada = new Date().toISOString();
			}
		},
		adicionarMeta: (state, action: PayloadAction<Meta>) => {
			state.metas.push(action.payload);
		},
	},
});

export const {alcancarMeta, adicionarMeta} = metasSlice.actions;

export default metasSlice.reducer;
