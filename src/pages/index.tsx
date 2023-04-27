import {Contador} from "@components/Contador";
import HeroTexto from "@components/HeroTexto";
import Gatinhos from "@components/Gatos/GatinhosCarrousel";
import Head from "next/head";

export default function Home() {
	const meta = 200; // meta em reais
	const atual = 0; // valor atual em reais

	return (
		<>
			<Head>
				<title>Apoio Miau | Bem-vinde</title>
				<link rel="icon" href="/favhome.ico" />
			</Head>
			<div className="pt-6">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="order-2 md:order-1">
						<div className="p-4">
							<HeroTexto />
						</div>
					</div>
					<div className="order-1 md:order-2">
						<Contador metaTexto="Ração: " meta={meta} atual={atual} />
						<Gatinhos />
					</div>
				</div>
			</div>
		</>
	);
}
