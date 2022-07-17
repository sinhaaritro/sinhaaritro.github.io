import AritroLogo from "assets/svg/AritroLogo";
import Button from "components/Button";
import { WithClassName } from "lib/interfaces/withClassName";

type NavigationProps = WithClassName<{
    isNavMenuOpen: boolean;
    toggleNavMenuOpen: () => void;
}>;

const Navigation = ({
    isNavMenuOpen,
    toggleNavMenuOpen,
    className,
}: NavigationProps) => {
    return (
        <div className="flex place-content-between mx-auto max-w-screen-xl">
            <div>
                <AritroLogo />
            </div>

            <nav>
                <ul className="hidden lg:h-full lg:flex items-center">
                    <li>
                        <Button>
                            <a href="#home">Home</a>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <a href="#projects">Projects</a>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <a href="#skills">Skill Set</a>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <a href="#contact">Contact Me</a>
                        </Button>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <Button onClick={toggleNavMenuOpen}>Menu</Button>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
