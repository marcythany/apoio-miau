/** @type {import('tailwindcss').Config} */

const {fontFamily} = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				mali: ["var(--font-mali)", "sans-serif"],
				hachi: ["var(--font-hachi)", "sans-serif"],
			},
			colors: {
				olive: "#514843", // cor primária do texto
				yellow: "#fffcd4", // cor secundária do texto
				"lilac-light": "#E8D6EC", // cor primária para o background principal do projeto todo
				"lilac-dark": "#D6C3DC", // tom sobre tom como leve degradê
				blue: "#5FB3B3", // para botões e elementos de destaque
				purple: "#8B5EBF", // para links e elementos secundários
				green: "#6BAA75", // para mensagens de sucesso e confirmação
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
