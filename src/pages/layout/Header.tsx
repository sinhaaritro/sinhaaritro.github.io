import Button from "components/Button";
import { useThemeContext } from "config/theme";
import { useState } from "react";
import Navigation from "./Navigation";

const Header = () => {
    const { theme } = useThemeContext();

    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    const toggleNavMenuOpen = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
    };

    const className = `h-20 p-4 drop-shadow-lg ${theme?.neutral?.[600]}`;

    return (
        <header className={className}>
            <Navigation
                isNavMenuOpen={isNavMenuOpen}
                toggleNavMenuOpen={toggleNavMenuOpen}
            />
            {isNavMenuOpen && (
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
            )}
        </header>
    );
};

export default Header;
