import Head from "next/head";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@stores/store";
import {Gato} from "@stores/gatosSlice";
import GatosCards from "@components/Gatos/GatosCards";

const Gatinhos = () => {
	const gatos: Gato[] = useSelector((state: RootState) => state.gatos.gatos);

	useEffect(() => {
		// Este código será executado sempre que a lista de gatos mudar
		// Ele atualiza o título da página com o número de gatos
		document.title = `Apoio Miau | ${gatos.length} Gatinhos`;
	}, [gatos]); // Esta lista de dependências garante que o efeito seja executado apenas quando a lista de gatos mudar

	return (
		<>
			<Head>
				<title>Apoio Miau | Nossos gatinhos</title>
				<link rel="icon" href="/favgatos.ico" />
			</Head>
			<div className="p-2">
				<div className="flex justify-center">
					<h1 className="text-4xl font-bold pb-4">Gatinhos ({gatos.length})</h1>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
					{gatos.map((gato) => (
						<GatosCards key={gato.id} gato={gato} />
					))}
				</div>
			</div>
		</>
	);
};

export default Gatinhos;
