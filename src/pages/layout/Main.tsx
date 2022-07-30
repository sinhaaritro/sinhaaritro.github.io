import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";

function Main() {
  return (
    <main className="flex flex-col mx-auto gap-3 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
