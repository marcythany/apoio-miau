// pages/_app.tsx
import type {AppProps} from "next/app";
import Head from "next/head";
import {Provider} from "react-redux";
import {store} from "@stores/store";
import "@styles/globals.css";
import Layout from "@components/layout";

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	);
}

export default MyApp;
