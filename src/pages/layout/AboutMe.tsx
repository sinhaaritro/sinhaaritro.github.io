import AritroLogo from "assets/svg/AritroLogo";
import Chip from "components/Chip";
import { useThemeContext } from "config/theme";
import SocialIcons from "layout/SocialIcons";

function AboutMe() {
  const { theme } = useThemeContext();

  const skillList: Array<{ color: string; icon: string; text: string }> = [
    { icon: "react", text: "React", color: "sky" },
    { icon: "nodedotjs", text: "NodeJS", color: "emerald" },
    { icon: "express", text: "Express", color: "slate" },
    { icon: "mongodb", text: "MongoDB", color: "green" },
    { icon: "typescript", text: "TypeScript", color: "blue" },
    { icon: "git", text: "Git", color: "orange" },
    { icon: "postgresql", text: "Postgresql", color: "indigo" },
    { icon: "docker", text: "Docker", color: "blue" },
    { icon: "cplusplus", text: "C++", color: "blue" },
    { icon: "dart", text: "Dart", color: "sky" },
    { icon: "python", text: "Python", color: "blue" },
  ];

  return (
    <section
      id="about-me"
      className="m-8 mx-auto max-w-screen-xl aspect-video "
    >
      <section
        id="about-me-main"
        className={`flex flex-col place-content-around h-full grow rounded-2xl drop-shadow ${theme?.primary?.[100]}`}
      >
        <div className="grow flex flex-col  place-content-around">
          <div className="flex mx-auto drop-shadow-none">
            <AritroLogo width="200" height="200" />
          </div>

          <p className="flex place-content-around text-7xl font-bold drop-shadow-none">
            Aritro Sinha
          </p>
          <div className="flex place-content-around px-4">
            <p className="text-2xl">Web Developer</p>
            <p className="text-2xl">Software Developer</p>
            <p className="text-2xl">Game Developer</p>
          </div>
          <div className="flex place-content-around">
            <SocialIcons />
          </div>
        </div>
        <div className="flex border-t border-neutral-500 text-xl">
          <p className="w-1/2 p-2 flex place-content-center border-r border-neutral-500">
            Download Resume
          </p>
          <p className="w-1/2 p-2 flex place-content-center ">Contact Me</p>
        </div>
      </section>
      <section
        id="about-me-details"
        className={`mx-5 flex flex-col place-content-around rounded-b-2xl drop-shadow ${theme?.primary?.[100]}`}
      >
        <div
          className={`border-y border-neutral-500 p-2 font-medium text-3xl text-center ${theme?.primary?.[200]}`}
        >
          About Me
        </div>
        <div className="p-6 px-12 flex flex-col gap-2 text-m text-center">
          <p className="">
            Hi, I am generalist programmer and designer. I love to find out how
            all kinds software works and use them in a creative way.
          </p>
          <p className="">
            I first became interested in how computer works when I played
            computer games in my childhood and before I knew it, I was already
            interested in finding out how games work. One thing lead to another
            and now I love making games, apps, websites and design other
            softwares.
          </p>
          <p className="">
            My interest in computer and technology helped me get better and
            proficient in learning new things in computer. At first I was only
            interested in learning the programming aspects of it, but my focus
            shifted and now I like to program and visually design everything.
          </p>
        </div>

        <div
          className={`border-y border-neutral-500 p-2 font-medium text-3xl text-center ${theme?.primary?.[200]}`}
        >
          Work
        </div>
        <div className="p-6 flex flex-col gap-2 text-m text-center">
          <p className="font-medium">Hyland (2022 - Present)</p>
          <p className="">Intern</p>
        </div>

        <div
          className={`border-y border-neutral-500 p-2 font-medium text-3xl text-center ${theme?.primary?.[200]}`}
        >
          Education
        </div>
        <div className="p-6 flex flex-col gap-2 text-m text-center">
          <p className="font-medium">BCA (2017 - 2020)</p>
          <p className="">Techno India University</p>
          <p className="font-medium">MCA (2020 - 2022)</p>
          <p className="">Netaji Subhash Engineering College</p>
        </div>
        <div
          className={`border-y border-neutral-500 p-2 font-medium text-3xl text-center ${theme?.primary?.[200]}`}
        >
          Skill
        </div>
        <div className="p-12 flex flex-wrap place-content-center gap-2 text-m text-center">
          {skillList.map((skill) => (
            <Chip
              key={skill.icon}
              icon={skill.icon}
              text={skill.text}
              variant="large"
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default AboutMe;
