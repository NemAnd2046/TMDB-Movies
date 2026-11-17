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
				<nav className="relative px-6 max-w-7xl mx-auto">
					{/* felső sor */}
					<div className="flex justify-between items-center">
						<div className="text-2xl font-bold">
							PETI
							<span className="text-red-500">FLIX</span>
						</div>
						{/* navigáció */}
						<div
							className={
								menuOpen
									? "absolute top-full left-0 right-0 flex flex-col gap-8 bg-gray-950 p-4 font-bold items-center min-[530px]:static min-[530px]:flex-row min-[530px]:bg-transparent min-[530px]:p-0"
									: "hidden min-[530px]:flex gap-8 font-bold items-center"
							}
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
						</div>
						{/* hamburger menü */}
						<button
							className="min-[530px]:hidden text-3xl"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							{menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
						</button>
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
