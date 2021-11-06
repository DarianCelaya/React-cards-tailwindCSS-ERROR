import React from "react";

export default function Card5() {
	return (
		<div className="bg-gray-100  h-screen">
			<div className="container m-11 text-center ">
				<div className="container w-5/6">
					<p className="font-bold mt-8 pb-2 text-2xl ">CARD 5</p>
					<div className="grid grid-rows-4 grid-cols-4 gap-4 my-2 ">
						{/* card 1 */}

						<div className="z-20 bg-white shadow-3xl rounded-3xl object-cover col-start-1 col-span-2 row-span-2 bg-cover bg-center bg-img ">
							<div className="z-30 absolute h-56 w-52 ">
								<div className="absolute inset-x-12 bottom-0  bg-cover bg-center rounded-2xl logo"></div>
							</div>
							<div className="figura rounded-3xl">
								<div className="text-white text-xl pb-8 pt-16 mt-16 pl-16 ml-24 text-right  z-40 absolute">
									Lorem ipsum dolor sit amet, <br />
									consectetur adipiscing elit.
								</div>
								<div className="text-white">
									<p className="text-left mr-16 mt-8 pt-48 pr-64">20.02.2019</p>
								</div>
								<div className="text-white pt-52 pl-44 ml-28 absolute  h-56 w-full ">
									<button className="hover:bg-white hover:text-black underline px-4 py-2 border border-white text-right">
										Learn more
									</button>
								</div>
							</div>
						</div>
						{/* end card 1 */}
						{/* card 2 */}
						<div className="z-20 bg-white shadow-3xl rounded-3xl object-cover col-start-3 col-span-2  row-span-2  bg-img-2 ">
							<div className="z-30 absolute h-56 w-52 ">
								<div className="absolute inset-x-12 bottom-0  bg-cover bg-center rounded-2xl logo"></div>
							</div>
							<div className="figura3 rounded-3xl">
								<div className="text-white text-xl pb-8 pt-16 mt-16 pl-16 ml-24 text-right  z-40 absolute">
									Lorem ipsum dolor sit amet, <br />
									consectetur adipiscing elit.
								</div>
								<div className="text-white">
									<p className="text-left mr-16 mt-8 pt-48 pr-64">20.02.2019</p>
								</div>
								<div className="text-white pt-52 pl-44 ml-28 absolute  h-56 w-full ">
									<button className=" hover:bg-white hover:text-black underline px-4 py-2 border border-white text-right">
										Learn more
									</button>
								</div>
							</div>
						</div>
						{/* end card 2 */}
						{/* card 3 */}
						<div className="z-20 bg-white shadow-3xl rounded-3xl object-cover row-start-3 col-span-2  row-span-2  bg-img-3 ">
							<div className="z-30 absolute h-56 w-52 ">
								<div className="absolute inset-x-12 bottom-0  bg-cover bg-center rounded-2xl logo"></div>
							</div>
							<div className="figura2 rounded-3xl">
								<div className="text-white text-xl pb-8 pt-16 mt-16 pl-16 ml-24 text-right  z-40 absolute">
									Lorem ipsum dolor sit amet, <br />
									consectetur adipiscing elit.
								</div>
								<div className="text-white">
									<p className="text-left mr-16 mt-8 pt-48 pr-64">20.02.2019</p>
								</div>
								<div className="text-white pt-52 pl-44 ml-28 absolute  h-56 w-full ">
									<button className="hover:bg-white hover:text-black underline px-4 py-2 border border-white text-right">
										Learn more
									</button>
								</div>
							</div>
						</div>
						{/* end card 3 */}
						{/* card 4 */}
						<div className="z-20 bg-white shadow-3xl rounded-3xl object-cover row-start-3 col-span-2  row-span-2  bg-img-4 ">
							<div className="z-30 absolute h-56 w-52 ">
								<div className="absolute inset-x-12 bottom-0  bg-cover bg-center rounded-2xl logo"></div>
							</div>
							<div className="figura4 rounded-3xl">
								<div className="text-white text-xl pb-8 pt-16 mt-16 pl-16 ml-24 text-right  z-40 absolute">
									Lorem ipsum dolor sit amet, <br />
									consectetur adipiscing elit.
								</div>
								<div className="text-white">
									<p className="text-left mr-16 mt-8 pt-48 pr-64">20.02.2019</p>
								</div>
								<div className="text-white pt-52 pl-44 ml-28 absolute  h-56 w-full ">
									<button className="hover:bg-white hover:text-black underline px-4 py-2 border border-white text-right">
										Learn more
									</button>
								</div>
							</div>
						</div>
						{/* end card 4 */}
					</div>
				</div>
			</div>
		</div>
	);
}
