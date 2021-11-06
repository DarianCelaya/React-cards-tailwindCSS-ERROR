import React from "react";

export default function Card1() {
	return (
		<div className="bg-blue-300 h-screen text-center items-center justify-center">
			<div className="content-center mx-8 items-center">
				<p className="font-bold mt-8 text-2xl ">CARD 1</p>
				<div className="container w-2/6 items-cente text-center content-center shadow-2xl ">
					{/* Card 1 */}
					<div className="items-center justify-center text-center  content-center ">
						<div className="pb-8 pb-8 pt-6 px-12 grid grid-rows-9 grid-cols-4 gap-4 my-2 bg-yellow-300 rounded ">
							<div className=" m-auto  shadow-2xl col-span-4 bg-yellow-300 rounded-full h-36 w-36 flex items-center justify-center">
								<img
									className="h-16 w-16"
									src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
								/>
							</div>
							<div className="row-start-2 flex items-center justify-center  ">
								<img
									className="h-8 w-8"
									src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
								/>
							</div>
							<div className="row-start-2  flex items-center justify-center">
								<img
									className="h-8 w-8 "
									src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
								/>
							</div>
							<div className="row-start-2 flex items-center justify-center text-left ">
								<img
									className="h-8 w-8 "
									src="https://cdn-icons-png.flaticon.com/512/2111/2111483.png"
								/>
							</div>
							<div className="row-start-2  flex items-center justify-center  text-left">
								<img
									className="h-8 w-8 "
									src="https://cdn-icons.flaticon.com/png/512/1723/premium/1723824.png?token=exp=1635739083~hmac=f6a3ba7858bd417cc2fd478a6fb5b92e"
								/>
							</div>
							<div className="row-start-3  col-span-2  flex items-center justify-center">
								<p className="text-2xl text-gray-800 font-bold">51</p>
							</div>
							<div className="row-start-4 col-span-2  flex items-center justify-center text-gray-800 ">
								Upvoted
							</div>
							<div className="row-start-3 col-span-2  flex items-center justify-center">
								<p className="text-2xl font-bold text-gray-800 ">9</p>
							</div>
							<div className="row-start-4 col-span-2  flex items-center justify-center text-gray-800 ">
								Created
							</div>
							<div className="row-start-5  col-span-2  flex items-center justify-center">
								<p className="text-2xl font-bold text-gray-800 ">9</p>
							</div>
							<div className="row-start-6 col-span-2 flex items-center justify-center text-gray-800 ">
								Showcased
							</div>
							<div className="row-start-5 col-span-2  flex items-center justify-center">
								<p className="text-2xl font-bold text-gray-800 ">1</p>
							</div>
							<div className="row-start-6 col-span-2  flex items-center justify-center text-gray-800 ">
								Colletions
							</div>
							<div className="row-start-7  col-span-2  flex items-center justify-center">
								<p className="text-2xl font-bold text-gray-800 ">2</p>
							</div>
							<div className="row-start-8 col-span-2  flex items-center justify-center text-gray-800 ">
								Followers
							</div>
							<div className="row-start-7 col-span-2  flex items-center justify-center">
								<p className="text-2xl font-bold text-gray-800 ">5</p>
							</div>
							<div className="row-start-8 col-span-2  flex items-center justify-center text-gray-800 ">
								Following
							</div>
						</div>
					</div>{" "}
					{/* end card 1 */}
				</div>
			</div>
		</div>
	);
}
