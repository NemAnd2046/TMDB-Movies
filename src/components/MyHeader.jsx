import React from "react";
import { NavLink, Outlet } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const MyHeader = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinkClass = ({ isActive }) =>
		`text-${isActive ? "red-5" : "gray-3"}00 transition-colors hover:text-red-300`;

	return (
		<div>
			<header className="bg-gray-950 p-4">
				<nav className="px-6 mx-auto max-w-7xl">
					<div className="flex flex-col min-[550px]:flex-row min-[550px]:justify-between min-[550px]:items-center">
						<div className="flex justify-between items-center">
							<div className="text-2xl font-bold">
								PETI
								<span className="text-red-500">FLIX</span>
							</div>
							<button
								className="min-[550px]:hidden text-3xl"
								onClick={() => setMenuOpen(!menuOpen)}
							>
								{menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
							</button>
						</div>
						<div
							className={`${menuOpen ? "flex" : "hidden"} mt-4 min-[550px]:mt-0 min-[550px]:flex flex-col min-[550px]:flex-row gap-8 font-bold items-center`}
						>
							<NavLink to={"/"} className={navLinkClass}>
								Kezdőlap
							</NavLink>
							<NavLink to={"/movies"} className={navLinkClass}>
								Filmek
							</NavLink>
							<NavLink to={"/tv"} className={navLinkClass}>
								Sorozatok
							</NavLink>
							<NavLink to={"/search"} className={navLinkClass}>
								Keresés
							</NavLink>
							<NavLink to={"/actors"} className={navLinkClass}>
								Színészek
							</NavLink>
						</div>
					</div>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default MyHeader;
