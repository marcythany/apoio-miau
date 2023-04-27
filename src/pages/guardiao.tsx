import Head from "next/head";
import Image from "next/image";
import React from "react";

type Props = {};

const Guardiao = (props: Props) => {
	return (
		<>
			<Head>
				<title>Apoio Miau | Torne-se um Guardião</title>
				<link rel="icon" href="/favguardiao.ico" />
			</Head>

			<div className="">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div className="relative w-full h-80 lg:h-full lg:min-h-screen overflow-hidden flex items-center justify-center">
							<Image
								src="https://i.imgur.com/4pIINpo.png"
								width={500}
								height={500}
								alt="Foto de fundo da página Guardião"
							/>
							<div className="absolute inset-0 bg-purple opacity-50"></div>
							<div className="absolute inset-0 flex flex-col items-center justify-center text-yellow z-10">
								<h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8">
									Torne-se um Guardião
								</h1>
							</div>
						</div>

						<div className="max-w-3xl mx-auto p-6 md:p-8 lg:p-12 lg:py-16">
							<div className="prose lg:prose-lg xl:prose-xl">
								<h2 className="text-2xl font-bold mb-4">
									Como se tornar um Guardião?
								</h2>
								<p>
									Se você deseja apadrinhar um gato, pode se tornar um Guardião
									da Apoio Miau. Veja abaixo as formas de contribuir:
								</p>
								<ul>
									<li>
										<strong>Pix:</strong> Faça uma doação através do Pix para o
										email <strong>marcythany@gmail.com</strong> Nome Marcel Luís
										Sobral. Qualquer valor é bem-vindo e será utilizado para
										cobrir os custos de alimentação, castração e tratamento
										médico dos gatos até que eles encontrem um novo lar.
									</li>
									<li>
										<strong>Redes sociais:</strong> Siga-nos nas redes sociais e
										ajude a divulgar a campanha da Apoio Miau. Compartilhe
										nossas postagens!
									</li>
								</ul>
								<p>
									Se você tiver alguma outra forma de contribuir ou quiser saber
									mais sobre como se tornar um Guardião da Apoio Miau, entre em
									contato conosco através do Instagram ou Twitter:{" "}
									<a
										href="https://www.instagram.com/marcythany/"
										target="_blank"
										rel="noopener noreferrer"
									>
										@marcythany
									</a>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Guardiao;
