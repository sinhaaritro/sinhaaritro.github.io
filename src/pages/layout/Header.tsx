import AritroLogo from "assets/svg/AritroLogo";
import Button from "components/Button";
import { useThemeContext } from "config/theme";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navigation from "./Navigation";

const Header = () => {
    const isMediumScreen = useMediaQuery({ query: "(min-width: 769px)" });
    const { theme } = useThemeContext();

    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    const toggleNavMenuOpen = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
    };

    const isShowingFullNavigation = !isMediumScreen && isNavMenuOpen;

    return (
        <>
            <header
                className={`h-20 p-4 drop-shadow-lg flex place-content-between mx-auto max-w-screen-xl ${theme?.neutral?.[600]} z-50`}
            >
                <div>
                    <AritroLogo />
                </div>

                {!isMediumScreen ? (
                    <Button className=" bg-red-500" onClick={toggleNavMenuOpen}>
                        Menu
                    </Button>
                ) : (
                    <Navigation />
                )}

                {/* {isNavMenuOpen && (
                <ul className="lg:hidden border-2 border-neutral-700">
                    <li>
                        <Button
                            className="w-full m-0"
                            onClick={toggleNavMenuOpen}
                        >
                            <a href="#home">Home</a>
                        </Button>
                    </li>
                    <li>
                        <Button
                            className="w-full m-0"
                            onClick={toggleNavMenuOpen}
                        >
                            <a href="#projects">Projects</a>
                        </Button>
                    </li>
                    <li>
                        <Button className="w-full m-0">
                            <a href="#skills">Skill Set</a>
                        </Button>
                    </li>
                    <li>
                        <Button className="w-full m-0">
                            <a href="#contact">Contact Me</a>
                        </Button>
                    </li>
                </ul>
            )} */}
            </header>
            {isShowingFullNavigation && <Navigation />}
        </>
    );
};

export default Header;
