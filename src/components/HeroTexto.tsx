import Link from "next/link";
import React from "react";

type Props = {};

const HeroTexto = (props: Props) => {
	return (
		<>
			<h1 className="text-4xl font-bold mb-1 text-center whitespace-pre-line break-words">
				Seja ume Guardião Virtual:
				<br /> Ajude Nossos Gatinhos!
			</h1>
			<div className="border-2 border-purple p-2 rounded-t rounded-b border-x-0">
				<p className="text-lg mb-6">
					Faça parte da nossa causa e torne-se um verdadeiro protetor dos nossos
					gatinhos. Faça uma doação e tenha acesso exclusivo ao nosso canal no
					Telegram, onde você receberá fotos diárias dos fofinhos em ação, sendo
					cuidados com amor e dedicação. Sua doação ajudará a manter nossos
					gatinhos saudáveis e felizes, enquanto você se diverte com as imagens
					mais fofas do seu dia. Junte-se a nós e comece a apoiar nossos
					gatinhos hoje mesmo!
				</p>
				<Link href="/guardiao">
					<button className="bg-blue hover:bg-purple text-yellow hover:text-lilac-light font-bold py-2 px-4 rounded">
						Torne-se ume guardião
					</button>
				</Link>
			</div>
		</>
	);
};

export default HeroTexto;
