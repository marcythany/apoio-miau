import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Logo from "@imagens/logo.svg"; // Importa o logo da pasta de imagens

type Props = {};

const Footer: React.FC<Props> = () => {
	const [year] = useState(() => new Date().getFullYear()); // Usa o hook de estado do React para obter o ano atual

	return (
		<footer className="h-[70px] w-full bg-purple text-lilac-light py-2 px-4 md:px-12 lg:px-16 xl:px-36 flex flex-col md:flex-row justify-between items-center">
			<div className="flex flex-col items-center md:items-start">
				<Image src={Logo} alt="Logo" className="h-8 w-8" />{" "}
				{/* Usa o componente Image do Next.js para exibir o logo */}
				<div className="text-sm">© {year} Direitos Reservados</div>{" "}
				{/* Usa interpolação de string para exibir o ano atual */}
			</div>
			<div className="flex items-center md:items-center md:mt-0">
				<a
					href="https://www.instagram.com/marcythany/"
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 text-sm hover:text-yellow mr-4 flex flex-col items-center"
				>
					<FontAwesomeIcon
						icon={faInstagram}
						className="hover:text-yellow h-4"
					/>
					<span className="text-center">Instagram</span>{" "}
				</a>

				<div className="flex items-center text-center text-sm text-yellow mr-4 font-bold">
					<p>Feito com</p>
					<span>
						{" "}
						<FontAwesomeIcon
							icon={faHeart}
							className="text-red-400 mx-1 h-4"
						/>{" "}
					</span>
					<p>
						por{" "}
						<a
							href="https://github.com/marcythany/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Marcy
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
