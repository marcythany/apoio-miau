import {ReactNode} from "react";
import NavBar from "@components/NavBar";
import Footer from "@components/Rodape";
import {fonteMali} from "@utils/fonts";

export default function Layout({children}: {children: ReactNode}) {
	return (
		<>
			<div
				className={`flex flex-col justify-center items-center min-h-screen bg-lilac-light text-olive ${fonteMali.className} font-mali`}
			>
				<div className="flex-grow w-[80vw]">
					<header className="top-0 z-50">
						<NavBar />
					</header>

					<main className="flex">{children}</main>
				</div>
				<Footer />
			</div>
		</>
	);
}
