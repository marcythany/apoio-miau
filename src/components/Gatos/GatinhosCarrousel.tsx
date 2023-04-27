import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setImageUrl} from "@stores/gatinhosCarrouselSlice";
import gatinho from "@imagens/gatos.png";
import {RootState} from "@stores/store"; // Importa o tipo RootState do store
import Image from "next/image";

const GatinhosCarrousel = () => {
	const {imageUrl} = useSelector(
		(state: RootState) => state.gatinhosCarrousel, // Usa RootState para obter o tipo correto do estado
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setImageUrl(gatinho.src));
	}, [dispatch]);

	return (
		<div className="flex justify-center items-center md:h-[250px]">
			<Image
				src={imageUrl || gatinho.src}
				width={550}
				height={250}
				alt="Image de gatinhos"
			/>
		</div>
	);
};

export default GatinhosCarrousel;
