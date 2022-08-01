import Chip from "components/Chip/Chip";
import SimpleIcon from "components/SimpleIcon";
import { SubTitle } from "components/Typography";
import { TechnologyKey, technologyList } from "data/technology";

function Skills() {
  const skillList: Array<TechnologyKey> = [
    "React",
    "NodeJS",
    "Express",
    "MongoDB",
    "TypeScript",
    "Git",
    "Postgresql",
    "Docker",
    "C++",
    "Dart",
    "Python",
  ];

  return (
    <section id="skills">
      <SubTitle className="border-y border-neutral-500 p-1">Skills</SubTitle>
      <div className="px-12 py-12 flex flex-wrap justify-around gap-2">
        {skillList.map((skill) => (
          <Chip key={skill} chipStyle={technologyList[skill].color}>
            <SimpleIcon iconName={technologyList[skill].icon} />
            {technologyList[skill].text}
          </Chip>
        ))}
      </div>
    </section>
  );
}

export default Skills;
