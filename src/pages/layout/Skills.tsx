import Chip from "components/Chip/Chip";
import SimpleIcon from "components/SimpleIcon";
import { TechnologyKey, technologyList } from "data/technology";
import SubSectionTitle from "layout/Section/SubSectionTitle";

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
      <SubSectionTitle>Skills</SubSectionTitle>
      <div className="px-12 py-12 flex flex-wrap justify-around gap-2 xl:px-16">
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
