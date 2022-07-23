import Chip from "components/Chip";
import Text from "components/Text";
import skillsGroupData from "data/skill.json";

const Skills = () => {
    return (
        <section id="skills" className="p-4 mx-auto max-w-screen-xl">
            <section className="">
                <Text
                    className="text-4xl font-semibold"
                    children="Skills"
                    htmlElement={"h1"}
                />
                {skillsGroupData.map((skillGroup, i) => {
                    return (
                        <section className="py-4 px-2" key={i}>
                            <h2 className="pb-2 text-2xl">{skillGroup.name}</h2>
                            <div className="flex flex-wrap">
                                {skillGroup.skills.map((skill, i) => {
                                    return (
                                        <Chip
                                            key={i}
                                            {...skill}
                                            variant="large"
                                        />
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}
            </section>
        </section>
    );
};

export default Skills;
