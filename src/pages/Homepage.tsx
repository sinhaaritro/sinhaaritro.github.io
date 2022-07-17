import { useThemeContext } from "config/theme";
import AboutMe from "pages/layout/AboutMe";
import Contact from "pages/layout/Contact";
import Projects from "pages/layout/Projects";
import Skills from "pages/layout/Skills";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const HomePage = () => {
    const { theme } = useThemeContext();

    return (
        <div id="home" className={`${theme?.primary?.[300]} text-neutral-900`}>
            <Header />
            <AboutMe />
            <Projects />
            {/* <Skills /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
