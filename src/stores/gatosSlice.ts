import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Gato {
	dataNascimento: Date;
	id: number;
	nome?: string;
	genitalia: string;
	cor: string;
	idade: string;
	castrado: string;
	tamanho: string;
	fotos: string[];
	isLiked?: boolean;
}

export interface GatoState {
	gatos: Gato[];
}

const initialState: GatoState = {
	gatos: [
		{
			id: 1,
			nome: "Shiva",
			genitalia: "Fêmea",
			cor: "Frajolado",
			idade: "1 ano 5 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/KbEKLOM.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2021-11-15"),
		},
		{
			id: 2,
			nome: "Sury",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "1 ano 5 meses",
			castrado: "Sim",
			tamanho: "Médio",
			fotos: [
				"https://i.imgur.com/xFLp5IN.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2021-11-15"),
		},
		{
			id: 3,
			nome: "Lucy",
			genitalia: "Fêmea",
			cor: "Marrom, Cinza, Branco, Bege",
			idade: "1 ano 2 meses",
			castrado: "Sim",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/pbV6TCm.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-01-10"),
		},
		{
			id: 4,
			nome: "Caspian",
			genitalia: "Macho",
			cor: "Branco manchado",
			idade: "11 meses",
			castrado: "Não",
			tamanho: "Médio",
			fotos: [
				"https://i.imgur.com/L1f4io5.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-04-12"),
		},
		{
			id: 5,
			nome: "Wolferina",
			genitalia: "Fêmea",
			cor: "Malhado acizentado",
			idade: "11 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/xm2cwoy.jpg",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-04-12"),
		},
		{
			id: 6,
			nome: "Philipa",
			genitalia: "Fêmea",
			cor: "Malhado frajola acizentado",
			idade: "11 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/Gkl5TiA.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-04-12"),
		},
		{
			id: 7,
			nome: "Salem",
			genitalia: "Macho",
			cor: "Preto",
			idade: "11 meses",
			castrado: "Não",
			tamanho: "Médio",
			fotos: [
				"https://i.imgur.com/Sr2Oqb8.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-04-12"),
		},
		{
			id: 8,
			nome: "Anastasia",
			genitalia: "Fêmea",
			cor: "Cinza Frajolado",
			idade: "8 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/VgoNMbI.jpg",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-09-15"),
		},
		{
			id: 9,
			nome: "",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "8 meses",
			castrado: "Não",
			tamanho: "Médio",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-09-15"),
		},
		{
			id: 10,
			nome: "",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "8 meses",
			castrado: "Não",
			tamanho: "Médio",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-09-15"),
		},
		{
			id: 11,
			nome: "",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "8 meses",
			castrado: "Não",
			tamanho: "Médio",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-09-15"),
		},
		{
			id: 12,
			nome: "",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "8 meses",
			castrado: "Não",
			tamanho: "Médio",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-09-15"),
		},
		{
			id: 13,
			nome: "",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "8 meses",
			castrado: "Não",
			tamanho: "Médio",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-09-15"),
		},
		{
			id: 14,
			nome: "",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "8 meses",
			castrado: "Não",
			tamanho: "Médio",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-09-15"),
		},
		{
			id: 15,
			nome: "",
			genitalia: "Fêmea",
			cor: "Cinza",
			idade: "4 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/3yCd76D.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2023-01-13"),
		},
		{
			id: 16,
			nome: "",
			genitalia: "Fêmea",
			cor: "Malhado acizentado",
			idade: "4 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2023-01-13"),
		},
		{
			id: 17,
			nome: "",
			genitalia: "Fêmea",
			cor: "Malhado acizentado",
			idade: "4 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2023-01-13"),
		},
		{
			id: 18,
			nome: "",
			genitalia: "Macho",
			cor: "Malhado Cinza",
			idade: "4 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/Y1j2hOI.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2023-01-13"),
		},
		{
			id: 19,
			nome: "",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "4 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/FcG1QCC.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2023-01-13"),
		},
		{
			id: 20,
			nome: "Simba",
			genitalia: "Macho",
			cor: "Malhado Frajola",
			idade: "4 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/wzShZac.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2023-01-13"),
		},
		{
			id: 21,
			nome: "",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "4 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2023-01-13"),
		},
		{
			id: 22,
			nome: "",
			genitalia: "Macho",
			cor: "Branco com manchas marrons",
			idade: "4 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://via.placeholder.com/600x400",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2023-01-13"),
		},
		{
			id: 23,
			nome: "Bastet",
			genitalia: "Fêmea",
			cor: "Branco com manchas marrons",
			idade: "4 meses",
			castrado: "Não",
			tamanho: "Pequeno",
			fotos: [
				"https://i.imgur.com/nAFCMrG.png",
				"https://via.placeholder.com/1280x720/bdf9fc/f065cd",
			],
			dataNascimento: new Date("2022-01-13"),
		},
	],
};

export const gatosSlice = createSlice({
	name: "gatos",
	initialState,
	reducers: {
		addGato: (state, action: PayloadAction<Gato>) => {
			state.gatos.push(action.payload);
		},
		toggleIsLiked: (state, action: PayloadAction<number>) => {
			const index = state.gatos.findIndex((gato) => gato.id === action.payload);
			state.gatos[index].isLiked = !state.gatos[index].isLiked;
		},
	},
});

export const {addGato, toggleIsLiked} = gatosSlice.actions;

export default gatosSlice.reducer;
