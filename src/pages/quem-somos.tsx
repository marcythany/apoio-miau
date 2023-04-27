import Head from "next/head";
import Image from "next/image";
import React from "react";

type Props = {};

const QuemSomos = (props: Props) => {
	return (
		<>
			<Head>
				<title>Apoio Miau | Quem Somos</title>
				<link rel="icon" href="/favsomos.ico" />
			</Head>

			<div className="">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div className="relative w-full h-80 lg:h-full lg:min-h-screen overflow-hidden flex items-center justify-center">
							<div className="absolute inset-0 bg-purple opacity-50"></div>
							<div className="absolute inset-0 flex flex-col items-center justify-center text-yellow z-10">
								<h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8">
									Quem Somos
								</h1>
							</div>
						</div>

						<div className="max-w-3xl mx-auto p-6 md:p-8 lg:p-12 lg:py-16">
							<div className="mb-8">
								<Image
									src="https://i.imgur.com/9yvnHjg.jpg"
									width={500}
									height={500}
									alt="Foto de mim e da minha mãe"
									className="rounded-full"
								/>
							</div>
							<div className="prose lg:prose-lg xl:prose-xl">
								<p>
									Nós somos um grupo de pessoas que passou por uma situação
									difícil ao perder nossa cachorrinha de 10 anos de forma
									repentina. Foi então que um gatinho filhote apareceu em nosso
									quintal, seguido por outro, a Shiva e o Sury. Logo depois, a
									Lucy também entrou em nossas vidas. Pedimos ajuda na SEMPA de
									São Leopoldo, lutamos muito e conseguimos castrar a Lucy e o
									Sury. Infelizmente, já era tarde para a Shiva e eles já haviam
									gerado duas ninhadas de filhotes.
								</p>
								<p>
									Atualmente, temos mais de 20 gatinhos que estão procurando um
									lar, enquanto tentamos sobreviver em meio ao capitalismo. Nós
									nos importamos profundamente com esses gatinhos e estamos
									fazendo tudo o que podemos para garantir que eles recebam o
									amor e cuidado que merecem. Contamos com a ajuda de pessoas
									generosas para nos ajudar a manter esses gatinhos saudáveis e
									felizes até que possam encontrar um lar permanente. Junte-se a
									nós nessa causa e faça a diferença na vida desses gatinhos!
								</p>
								<p>
									Se você quiser entrar em contato conosco, pode enviar uma
									@marcythany ou nos seguir nas redes sociais:
								</p>
								<ul>
									<li>
										Instagram:{" "}
										<a
											href="https://www.instagram.com/marcythany/"
											target="_blank"
											rel="noopener noreferrer"
										>
											@marcythany
										</a>
									</li>
									<li>
										Twitter:{" "}
										<a
											href="https://www.twitter.com/marcythany"
											target="_blank"
											rel="noopener noreferrer"
										>
											@marcythany
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QuemSomos;
