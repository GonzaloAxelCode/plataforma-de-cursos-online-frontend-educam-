"use client"

import { Logo } from "@/components/icons/icons";
import { Navbar } from "@/components/navbar/navbar";

import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid';



export default function Home() {
	return (
		<main>
			<Navbar />
			<div className="bg-white pb-8 sm:pb-12 lg:pb-12">
				<div className="overflow-hidden pt-6 sm:pt-6 lg:relative lg:py-18">
					<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
						<div>
							<div>
								<Logo size={120} />
							</div>
							<div className="mt-3">
								<div>
									<a href="#" className="inline-flex space-x-4">

										<span className="inline-flex items-center space-x-1 text-sm font-medium text-indigo-600">
											<span>Version 0.1.0</span>
											<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
										</span>
									</a>
								</div>
								<div className="mt-6 sm:max-w-xl">
									<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
										Tus destrezas valen mas en Educam
									</h1>
									<p className="mt-6 text-xl text-gray-500">
										¡Desata tu potencial y conviértete en un maestro en la web

									</p>
								</div>

								<div className="mt-6">
									<div className="inline-flex items-center divide-x divide-gray-300">
										<div className="flex flex-shrink-0 pr-5">
											<StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
											<StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
											<StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
											<StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
											<StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
										</div>
										<div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">


											<span className="font-medium text-gray-900">Valorado con 5 estrellas</span> por más de{' '} <span className="font-medium text-indigo-600">500 usuarios beta</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="sm:mx-auto sm:max-w-3xl sm:px-6">
						<div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">

							<div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
								<img
									className="w-full"
									src="https://qph.cf2.quoracdn.net/main-qimg-3d760192ecde6e9014006c268a8f94c9"
									alt=""
									width={500}
									height={500}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
