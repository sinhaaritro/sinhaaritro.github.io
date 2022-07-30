import Chip from "components/Chip";
import Text from "components/Typography/Text";
import skillsGroupData from "data/skill.json";

function Skills() {
  return (
    <section id="skills" className="p-4 mx-auto max-w-screen-xl">
      <section className="">
        <Text className="text-4xl font-semibold" htmlElement="h1">
          Skills
        </Text>
        {skillsGroupData.map((skillGroup) => (
          <section className="py-4 px-2" key={skillGroup.name}>
            <h2 className="pb-2 text-2xl">{skillGroup.name}</h2>
            <div className="flex flex-wrap">
              {skillGroup.skills.map((skill) => (
                <Chip
                  key={skill.text}
                  icon={skill.icon}
                  text={skill.text}
                  variant="large"
                />
              ))}
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}

export default Skills;
