import Navigation from "pages/layout/Navigation";
import AboutMe from "pages/layout/AboutMe";
import Projects from "pages/layout/Projects";
import Skills from "pages/layout/Skills";
import Contact from "pages/layout/Contact";
import { useState } from "react";
import PrimaryButton from "components/Button";

const HomePage = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    const toggleNavMenuOpen = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
    };

    return (
        <div id="home" className="bg-slate-100 text-slate-900">
            <div className="mx-auto pb-8 max-w-screen-xl">
                <Navigation
                    isNavMenuOpen={isNavMenuOpen}
                    toggleNavMenuOpen={toggleNavMenuOpen}
                />
                {isNavMenuOpen && (
                    <ul className="lg:hidden border-2 border-slate-700">
                        <li>
                            <PrimaryButton
                                className="w-full m-0"
                                onClick={toggleNavMenuOpen}
                            >
                                <a href="#home">Home</a>
                            </PrimaryButton>
                        </li>
                        <li>
                            <PrimaryButton
                                className="w-full m-0"
                                onClick={toggleNavMenuOpen}
                            >
                                <a href="#projects">Projects</a>
                            </PrimaryButton>
                        </li>
                        <li>
                            <PrimaryButton className="w-full m-0">
                                <a href="#skills">Skill Set</a>
                            </PrimaryButton>
                        </li>
                        <li>
                            <PrimaryButton className="w-full m-0">
                                <a href="#contact">Contact Me</a>
                            </PrimaryButton>
                        </li>
                    </ul>
                )}
                <AboutMe />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </div>
    );
};

export default HomePage;
