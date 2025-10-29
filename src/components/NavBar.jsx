import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../context/ThemeContext";

const NavBar = () => {
	const { darkMode, setDarkMode } = useDarkMode();
	const [t, i18n] = useTranslation("global");

	const toggleLanguage = () => {
		const newLanguage = i18n.language === "es" ? "en" : "es";
		i18n.changeLanguage(newLanguage);
	};

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50); // puedes ajustar 50 a tu gusto
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className={`fixed top-0 w-full h-auto py-2 flex justify-around items-start font-mono z-50 transition-all duration-300
			${isScrolled ? "bg-white/10 dark:bg-slate-900/70 backdrop-blur shadow-md" : "bg-transparent"}
		`}>
			{/* Botón Dark Mode */}
			<button
				onClick={() => setDarkMode(!darkMode)}
				className="bg-[#d8d8d8] dark:bg-white/30 border rounded-[15px] px-2 py-1 cursor-pointer hover:bg-slate-300"
			>
				{darkMode ? "☀︎" : "☪︎"}
			</button>

			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="focus:outline-none cursor-pointer"
			>
				<img
					src={
						darkMode
							? "/logo-RS-dark-theme.png"
							: "/logo-RS-Light-theme.png"
					}
					alt="Logo"
					className={`transition-all duration-500 rounded-[10px] shadow-xl ${isScrolled ? "w-16 lg:w-24" : "w-60 lg:w-80"
						}`}
				/>
			</button>


			{/* Botón Idioma */}
			<button
				onClick={toggleLanguage}
				className="bg-[#d8d8d8] dark:bg-white/30 border rounded-[15px] px-4 py-1 cursor-pointer hover:bg-slate-300"
			>
				{i18n.language === "es" ? "EN" : "ES"}
			</button>
		</section>
	);
};

export default NavBar;
