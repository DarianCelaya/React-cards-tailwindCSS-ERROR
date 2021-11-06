import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";

import Card1 from "./Components/Card1.jsx";
import Card2 from "./Components/Card2.jsx";
import Card3 from "./Components/Card3.jsx";
import Card4 from "./Components/Card4.jsx";
import Card5 from "./Components/Card5.jsx";
import Card6 from "./Components/Card6.jsx";

export default function App() {
	return (
		<>
			<Router>
				<div className="mt-4 text-center container px-5 mx-auto grid grid-cols-10 divide-x divide-gray-500">
					<NavLink to="/card1" className="mr-2 pt-2 px-4 ">
						Card 1
					</NavLink>
					<NavLink to="/card2" className=" mr-2 pt-2 px-4 ">
						Card 2
					</NavLink>
					<NavLink to="/card3" className=" mr-2 pt-2 px-4 ">
						Card 3
					</NavLink>
					<NavLink to="/card4" className=" mr-2 pt-2 px-4 ">
						Card 4
					</NavLink>
					<NavLink to="/card5" className=" mr-2 pt-2 px-4 ">
						Card 5
					</NavLink>
					<NavLink to="/card6" className=" mr-2 pt-2 px-4 ">
						Card 6
					</NavLink>
				</div>

				<Switch>
					<Route path="/card1" exact>
						<Card1 />
					</Route>
					<Route path="/card2" exact>
						<Card2 />
					</Route>
					<Route path="/card3" exact>
						<Card3 />
					</Route>
					<Route path="/card4" exact>
						<Card4 />
					</Route>
					<Route path="/card5" exact>
						<Card5 />
					</Route>
					<Route path="/card6" exact>
						<Card6 />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
