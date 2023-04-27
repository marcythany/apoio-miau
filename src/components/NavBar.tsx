import React, {useState} from "react";
import {fonteHachiMaruPop} from "@utils/fonts";
import Link from "next/link";

type Props = {};

const NavBar: React.FC<Props> = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-transparent">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14">
					<div className="flex-shrink-0">
						<Link
							href="/"
							className={`${fonteHachiMaruPop.className} !font-bold text-2xl hover:text-purple ml-2 cursor-pointer`}
						>
							Apoio Miau 🐾
						</Link>
					</div>
					<div className="hidden md:block">
						<div className="flex items-center">
							<Link
								href="/"
								className="text-lg font-bold hover:text-purple ml-10 border-b-2 border-transparent rounded-bl-md transition duration-300 ease-in-out transform  hover:border-blue"
							>
								Página Inicial
							</Link>
							<Link
								href="/gatinhos"
								className="text-lg font-bold hover:text-purple ml-10 border-b-2 border-transparent transition duration-300 ease-in-out transform hover:border-blue"
							>
								Gatinhos
							</Link>
							<Link
								href="/quem-somos"
								className="text-lg font-bold hover:text-purple ml-10 border-b-2 border-transparent rounded-br-md transition duration-300 ease-in-out transform hover:border-blue"
							>
								Quem somos
							</Link>
						</div>
					</div>

					<div className="flex md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="p-2 rounded-md inline-flex items-center justify-center hover:text-blue transition duration-150 ease-in-out"
						>
							<svg
								className={`${isMenuOpen ? "hidden" : "block "} h-6 w-6`}
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div
					className={`${
						isMenuOpen
							? "block text-center bg-blue text-yellow rounded-tl-md rounded-bl-md rounded-br-md"
							: "hidden"
					} md:hidden pt-2 pb-3`}
				>
					<Link
						href="/"
						className="block pl-3 pr-2 py-2 text-base font-bold hover:text-lilac-light hover:bg-purple transition duration-150 ease-in-out"
					>
						Página Inicial
					</Link>
					<Link
						href="/gatinhos"
						className="block pl-3 pr-2 py-2 text-base font-bold hover:text-lilac-light hover:bg-purple transition duration-150 ease-in-out"
					>
						Gatinhos
					</Link>
					<Link
						href="/quem-somos"
						className="block pl-3 pr-2 py-2 text-base font-bold hover:text-lilac-light hover:bg-purple transition duration-150 ease-in-out"
					>
						Quem somos
					</Link>
					<button
						onClick={() => setIsMenuOpen(false)}
						className="p-2 rounded-tl-md rounded-tr-md inline-flex items-center justify-center hover:text-lilac-light bg-purple focus:outline-none focus:bg-gray-100 focus:text-yellow transition duration-150 ease-in-out absolute top-0 right-0 mt-6 mr-[11.4vw]"
					>
						<svg
							className="h-6 w-6"
							stroke="currentColor"
							fill="#fffcd4"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
