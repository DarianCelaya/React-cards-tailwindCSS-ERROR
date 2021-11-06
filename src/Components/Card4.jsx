import React from "react";

export default function Card4() {
	return (
		<div className="bg-gray-800  h-screen ">
			<div className="container justify-center">
				<p className="font-bold mt-8 pb-2 text-2xl text-center text-white">
					CARD 4
				</p>
				<div className="flex flex-wrap mx-4 m-11 text-center items-center justify-center">
					<div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
						<a
							href=""
							className="c-card block bg-white shadow-3xl rounded-lg overflow-hidden"
						>
							<div className="relative pb-48 overflow-hidden">
								<img
									className="absolute inset-0 h-full w-full object-cover"
									src="https://images.unsplash.com/photo-1480498073050-4c6abeee90c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
									alt=""
								/>
							</div>
							<div className="p-4">
								<p className="text-pink-600 font-semibold text-center ">
									4 days ago
								</p>
								<p className="font-bold text-center text-3xl mb-4">Post One</p>
								<p className="text-sm text-gray-400 text-center mb-4">
									Lorem ipsum dolor sit amet consectetur adipiscing elit
									fringilla sagittis, pulvinar primis quisque id tristique
									feugiat lectus sollicitudin, arcu nisi litora mollis maecenas
									nec lacinia quis.
								</p>
							</div>
							<div className="c-card block bg-pink-600 ">
								<div className="grid grid-rows-1 grid-cols-3 text-center text-white ">
									<div className="m-2 border-r-2 border-pink-800">
										<p className="font-normal text-2xl">
											4 <span className="font-normal text-xl">ͫ</span>
										</p>
										<p className="text-xs pb-2 ">READ</p>
									</div>
									<div className="m-2 border-r-2 border-pink-800">
										<p className="font-normal text-2xl">5123</p>
										<p className="text-xs pb-2">VIEWS</p>
									</div>
									<div className="m-2">
										<p className="font-normal text-2xl">32</p>
										<p className="text-xs pb-2 ">COMMENTS</p>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
