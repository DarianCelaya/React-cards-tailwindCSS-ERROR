import React from "react";

export default function Card3() {
	return (
		<div className="bg-gray-100 h-screen ">
			<div className="content-center mx-8  text-center items-center justify-center">
				<p className="font-bold mt-8 pb-2 text-2xl ">CARD 3</p>
				{/* card */}
				<div className="grid grid-rows-6 grid-cols-4 gap-4 my-2 bg-green-500 bg-opacity-30 rounded-lg shadow-2xl w-2/4 ">
					<div className="col-span-2 row-span-6 bg-white text-center ">
						<img
							className="w-32 h-32 object-center mx-20 mt-4"
							src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
						/>
						<p className="font-bold text-3xl text-green-900 mt-4">
							Salix Dubois
						</p>
						<p className="font-normal text-xl mb-12 text-green-800 ">
							Programmer
						</p>
						<button className="py-1 font-semibold mb-4 px-8 text-green-800 rounded-full border-2 border-green-500 hover:bg-green-500 text-xl hover:text-white">
							Follow
						</button>
						<br />
						<button className="py-1 font-semibold mb-4 px-8 text-green-800 rounded-full border-2 border-green-500 hover:bg-green-500 text-xl hover:text-white">
							Message
						</button>
					</div>
					<div className="col-span-2 row-span-2 text-center m-4 border-b-2 border-fuchsia-600">
						<p className="text-2xl font-bold text-green-900">523</p>
						<p className="font-regular text-lg text-green-800">Posts</p>
					</div>
					<div className="col-span-2 row-span-2 text-center m-4 border-b-2 border-fuchsia-600">
						<p className="text-2xl font-bold text-green-900">1387</p>
						<p className="font-regular text-lg text-green-800">Likes</p>
					</div>
					<div className="col-span-2 row-span-2 text-center  m-4 ">
						<p className="text-2xl font-bold text-green-900">146</p>
						<p className="font-regular text-lg text-green-800">Followers</p>
					</div>
				</div>
			</div>
		</div>
	);
}
