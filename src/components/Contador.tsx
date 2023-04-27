import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {adicionarMeta, alcancarMeta} from "@stores/metasSlice";
import Metas from "./Metas";
import {RootState} from "@stores/store";

interface ContadorProps {
	meta: number; // meta em reais
	atual: number; // valor atual em reais
	metaTexto?: string; // texto personalizável para a meta
}

export function Contador({meta, atual, metaTexto = "Meta: "}: ContadorProps) {
	const [porcentagem, setPorcentagem] = useState(
		Math.round((atual / meta) * 100),
	);

	const dispatch = useDispatch();
	const metas = useSelector((state: RootState) => state.metas);

	useEffect(() => {
		if (porcentagem === 100) {
			const metaAlcancada = {
				titulo: "Minha meta alcançada",
				valor: atual,
				data: new Date().toLocaleDateString("pt-BR"),
				dataAlcancada: new Date().toISOString(),
			};

			dispatch(adicionarMeta(metaAlcancada));
		}
	}, [porcentagem, dispatch, atual]);

	useEffect(() => {
		setPorcentagem(Math.round((atual / meta) * 100));
	}, [atual, meta]);

	return (
		<div className="bg-pawn">
			<div className="text-center bg-lilac-dark bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-md rounded-lg p-4">
				<h2 className="text-2xl font-bold mb-4">
					{metaTexto}
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(meta)}
					<br />
					{`${porcentagem}% (${new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(atual)})`}
				</h2>
				<div className="pb-2">
					<p>
						<strong>Pix:</strong> marcythany@gmail.com
					</p>
				</div>
				<div className="bg-purple h-6 rounded-full">
					<div
						className="bg-blue h-6 rounded-full"
						style={{width: `${porcentagem}%`}}
					></div>
				</div>
				<Metas />
			</div>
		</div>
	);
}
