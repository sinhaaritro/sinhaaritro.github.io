import AritroLogo from "assets/svg/AritroLogo";
import Chip from "components/Chip";
import { SubTitle, KeyValuePair } from "components/Typography";
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
    <section id="about-me" className="my-3 px-2 mx-auto aspect-video">
      <section
        id="about-me-main"
        className={`flex flex-col justify-around h-full grow rounded-2xl drop-shadow ${theme?.primary?.[100]} `}
      >
        <div className="flex flex-col gap-6 justify-around px-8 py-12">
          <div className="flex mx-auto">
            <AritroLogo width="100" height="100" />
          </div>

          <p className="text-5xl text-center font-bold">Aritro Sinha</p>
          <div className="flex flex-col gap-3 justify-around text-lg text-center">
            <p>Web Developer</p>
            <p>Software Developer</p>
            <p>Game Developer</p>
          </div>
          <SocialIcons />
        </div>
        <div className="flex border-t border-neutral-500 text-base">
          <p className="w-1/2 p-2 text-center border-r border-neutral-500">
            Download Resume
          </p>
          <p className="w-1/2 p-2 text-center">Contact Me</p>
        </div>
      </section>
      <section
        id="about-me-details"
        className={`mx-4 flex flex-col justify-around rounded-b-2xl drop-shadow ${theme?.primary?.[100]}`}
      >
        <SubTitle className="border-y border-neutral-500 p-1">
          About Me
        </SubTitle>
        <div className="py-5 px-3 flex flex-col gap-6 text-center text-base">
          <p>
            Hi, I am generalist programmer and designer. I love to find out how
            all kinds software works and use them in a creative way.
          </p>
          <p>
            I first became interested in how computer works when I played
            computer games in my childhood and before I knew it, I was already
            interested in finding out how games work. One thing lead to another
            and now I love making games, apps, websites and design other
            softwares.
          </p>
          <p>
            My interest in computer and technology helped me get better and
            proficient in learning new things in computer. At first I was only
            interested in learning the programming aspects of it, but my focus
            shifted and now I like to program and visually design everything.
          </p>
        </div>

        <SubTitle className="border-y border-neutral-500 p-1">
          Experience
        </SubTitle>

        <div className="py-5 px-3 flex flex-col gap-6 text-center">
          <KeyValuePair keyItem="Hyland (2022 - Present)" valueItem="Intern" />
        </div>

        <SubTitle className="border-y border-neutral-500 p-1">
          Education
        </SubTitle>

        <div className="py-5 px-3 flex flex-col gap-6 text-center">
          <KeyValuePair
            keyItem="BCA(2017 - 2020)"
            valueItem="Techno India University"
          />
          <KeyValuePair
            keyItem="MCA (2020 - 2022)"
            valueItem="Netaji Subhash Engineering College"
          />
        </div>

        <SubTitle className="border-y border-neutral-500 p-1">Skills</SubTitle>

        <div className="p-12 flex flex-wrap justify-around gap-2 text-m text-center">
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
