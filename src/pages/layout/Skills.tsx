import Chip, { ChipStyleColor } from "components/Chip/Chip";
import SimpleIcon from "components/SimpleIcon";
import { SubTitle } from "components/Typography";

function Skills() {
  const skillList: Array<{
    color: ChipStyleColor;
    icon: string;
    text: string;
  }> = [
    { icon: "React", text: "React", color: "sky" },
    { icon: "Nodedotjs", text: "NodeJS", color: "emerald" },
    { icon: "Express", text: "Express", color: "slate" },
    { icon: "Mongodb", text: "MongoDB", color: "green" },
    { icon: "Typescript", text: "TypeScript", color: "blue" },
    { icon: "Git", text: "Git", color: "orange" },
    { icon: "Postgresql", text: "Postgresql", color: "indigo" },
    { icon: "Docker", text: "Docker", color: "blue" },
    { icon: "Cplusplus", text: "C++", color: "blue" },
    { icon: "Dart", text: "Dart", color: "sky" },
    { icon: "Python", text: "Python", color: "blue" },
  ];

  return (
    <section id="skills">
      <SubTitle className="border-y border-neutral-500 p-1">Skills</SubTitle>
      <div className="px-12 py-12 flex flex-wrap justify-around gap-2">
        {skillList.map((skill) => (
          <Chip key={skill.icon} chipStyle={skill.color}>
            <SimpleIcon iconName={skill.icon} />
            {skill.text}
          </Chip>
        ))}
      </div>
    </section>
  );
}

export default Skills;
