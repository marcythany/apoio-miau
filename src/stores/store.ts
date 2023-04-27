import {configureStore} from "@reduxjs/toolkit";
import gatosReducer from "./gatosSlice";
import gatinhosCarrouselReducer from "./gatinhosCarrouselSlice";
import metasReducer from "./metasSlice"; // Importa o reducer do slice metasSlice

export const store = configureStore({
	reducer: {
		gatos: gatosReducer,
		gatinhosCarrousel: gatinhosCarrouselReducer,
		metas: metasReducer, // Adiciona o reducer do slice metasSlice ao store global
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
