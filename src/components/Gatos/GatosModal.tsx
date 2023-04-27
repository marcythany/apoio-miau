import React from "react";
import {Gato} from "@stores/gatosSlice";
import Image from "next/image";

interface GatosModalProps {
	gato: Gato;
	isOpen: boolean;
	onClose: () => void;
}

const GatosModal: React.FC<GatosModalProps> = ({gato, isOpen, onClose}) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed z-10 inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
				<div
					className="fixed inset-0 transition-opacity"
					aria-hidden="true"
					onClick={onClose}
				>
					<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>

				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				></span>

				<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<Image
							src={gato.fotos[0]}
							width={720}
							height={480}
							alt={`Foto do gato ${gato.nome}`}
							className="rounded-lg"
						/>
						<h3 className="text-lg font-medium">{gato.nome}</h3>
						<p className="text-gray-500">{`Idade: ${gato.idade}`}</p>
						<p className="text-gray-500">{`Tamanho: ${gato.tamanho}`}</p>
					</div>

					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
							onClick={onClose}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
