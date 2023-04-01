import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Hero from "./hero";

type Props = {
	children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<div className="w-screen min-h-screen flex flex-col">
				<Navbar />
				<Hero />
				{children}
			</div>
			<div>Test</div>
		</>
	);
}
