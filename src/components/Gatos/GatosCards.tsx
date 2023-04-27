import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {Gato, toggleIsLiked} from "@stores/gatosSlice";
import Link from "next/link";
import {calcularIdade} from "@utils/calcularIdadeGatos";

interface GatosCardsProps {
	gato: Gato;
}

const GatosCards: React.FC<GatosCardsProps> = ({gato}) => {
	const dispatch = useDispatch();
	const [idade, setIdade] = useState(calcularIdade(gato.dataNascimento));

	const addLike = () => {
		dispatch(toggleIsLiked(gato.id));
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			return setIdade(calcularIdade(gato.dataNascimento));
		}, 60 * 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [gato.dataNascimento]);

	return (
		<>
			<div className="shadow shadow-purple rounded-lg overflow-hidden">
				<div className="relative">
					<Image
						src={gato.fotos[0]}
						width={720}
						height={480}
						alt={`Foto do gato ${gato.nome}`}
						className="rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[200px] object-cover"
					/>
					<button
						onClick={addLike}
						className={`absolute top-0 right-0 rounded-full text-yellow p-2 ${
							gato.isLiked ? "bg-purple text-red-300" : "bg-blue"
						}`}
					>
						<FontAwesomeIcon icon={faHeart} className="h-5" />
					</button>
				</div>
				<div className="p-4 mb-2">
					{gato.nome ? (
						<h3 className="text-lg font-bold">{gato.nome}</h3>
					) : (
						<h3 className="text-lg font-bold underline">
							<Link href="/guardiao">Torne-se um guardião e nomeie essa</Link>
						</h3>
					)}
					<p className="text-purple">{`Cor: ${gato.cor}`}</p>
					<p className="text-purple">{`Genitalia: ${gato.genitalia}`}</p>
					<p className="text-purple">{`Castrado: ${gato.castrado}`}</p>
					<p className="text-purple">{`Idade: ${idade}`}</p>
					<p className="text-purple">{`Tamanho: ${gato.tamanho}`}</p>
				</div>
			</div>
		</>
	);
};

export default GatosCards;
