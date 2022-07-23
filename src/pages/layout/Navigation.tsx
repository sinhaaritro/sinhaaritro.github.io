import Button from "components/Button";
import { WithClassName } from "lib/interfaces/withClassName";

type NavigationProps = WithClassName<{}>;

const Navigation = () => {
    return (
        <nav className="absolute top-16 right-16 bg-yellow-500 lg:static">
            <ul className="flex flex-col bg-yellow-500 lg:flex-row lg:h-full lg:bg-inherit items-center">
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
        </nav>
    );
};

export default Navigation;
