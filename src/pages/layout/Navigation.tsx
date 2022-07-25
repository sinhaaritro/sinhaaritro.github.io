import Button from "components/Button";
import { WithClassName } from "lib/interfaces/withClassName";

type NavigationProps = WithClassName<{ toggleNavMenuOpen: () => void }>;

const Navigation = ({ toggleNavMenuOpen }: NavigationProps) => {
    return (
        <nav className="absolute top-16 right-16 bg-neutral-100 rounded lg:static">
            <ul className="flex flex-col lg:flex-row lg:h-full lg:bg-inherit items-center">
                <li>
                    <Button onClick={toggleNavMenuOpen}>
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
        </nav>
    );
};

export default Navigation;
