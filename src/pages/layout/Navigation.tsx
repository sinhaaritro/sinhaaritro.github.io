import AritroLogo from "assets/svg/AritroLogo";
import PrimaryButton from "components/Button";

interface NavigationProps {
    isNavMenuOpen: boolean;
    toggleNavMenuOpen: () => void;
}

const Navigation = ({ isNavMenuOpen, toggleNavMenuOpen }: NavigationProps) => {
    return (
        <header className="h-20 p-4 flex place-content-between">
            <div>
                <AritroLogo />
            </div>

            <nav>
                <ul className="hidden lg:h-full lg:flex items-center">
                    <li>
                        <PrimaryButton>
                            <a href="#home">Home</a>
                        </PrimaryButton>
                    </li>
                    <li>
                        <PrimaryButton>
                            <a href="#projects">Projects</a>
                        </PrimaryButton>
                    </li>
                    <li>
                        <PrimaryButton>
                            <a href="#skills">Skill Set</a>
                        </PrimaryButton>
                    </li>
                    <li>
                        <PrimaryButton>
                            <a href="#contact">Contact Me</a>
                        </PrimaryButton>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <PrimaryButton onClick={toggleNavMenuOpen}>
                        Menu
                    </PrimaryButton>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
