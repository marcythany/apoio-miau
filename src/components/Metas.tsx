import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@stores/store";
import {formatarValor} from "@utils/formatarValor";

interface Meta {
	titulo: string;
	valor: number;
	data?: string;
	dataAlcancada?: string;
}

const Metas = () => {
	const metas = useSelector((state: RootState) => state.metas.metas);
	const [secaoAberta, setSecaoAberta] = useState(false);

	return (
		<div>
			<div>
				<h1 className="text-2xl font-bold mb-2">
					{!secaoAberta && "Metas Alcançadas"}
					{secaoAberta && (
						<div className="flex items-center justify-center pt-2">
							<button
								className="text-2xl font-bold h-[40px] px-2 focus:outline-none bg-blue rounded-full"
								onClick={() => setSecaoAberta(false)}
							>
								<span className="mr-2 text-yellow">
									Fechar metas alcançadas
								</span>
								<span className=" text-yellow px-2 rounded-full bg-purple hover:bg-red-500">
									X
								</span>
							</button>
						</div>
					)}
				</h1>
			</div>
			{!secaoAberta && (
				<>
					<p className="text-lg mt-2">
						Total de metas alcançadas: {metas.length}
						<button
							className="ml-4 text-yellow rounded-full p-2 bg-blue focus:outline-none"
							onClick={() => setSecaoAberta(true)}
						>
							Ver metas alcançadas
						</button>
					</p>
				</>
			)}
			{secaoAberta && (
				<div className="mt-4">
					{metas.map((meta: Meta, index: number) => (
						<div key={index}>
							<p className="text-lg">
								{meta.titulo} ({formatarValor(meta.valor)})
							</p>
							<p className="text-gray-500">
								{meta.dataAlcancada
									? new Date(meta.dataAlcancada).toLocaleDateString("pt-BR")
									: ""}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Metas;
