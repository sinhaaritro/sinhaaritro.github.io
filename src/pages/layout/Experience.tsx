import KeyPair from "components/KeyValue/KeyPair";
import KeyValuePair from "components/KeyValue/KeyValuePair";
import ValuePair from "components/KeyValue/ValuePair";
import Section from "layout/Section/Section";
import SectionTitle from "layout/Section/SectionTitle";
import SubSectionTitle from "layout/Section/SubSectionTitle";
import Skills from "./Skills";

function Experience() {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="xl:flex border-collapse">
        <div className="xl:w-1/2 xl:border-r-2 xl:border-neutral-500">
          <SubSectionTitle>Work</SubSectionTitle>
          <div className="py-5 px-20 flex flex-col gap-6 text-left">
            <KeyValuePair>
              <KeyPair>Hyland (2022 - Present)</KeyPair>
              <ValuePair>Intern</ValuePair>
            </KeyValuePair>
          </div>

          <SubSectionTitle>Education</SubSectionTitle>
          <div className="py-5 px-20 flex flex-col gap-6 text-right">
            <KeyValuePair>
              <KeyPair>BCA(2017 - 2020)</KeyPair>
              <ValuePair>Techno India University</ValuePair>
            </KeyValuePair>
            <KeyValuePair>
              <KeyPair>MCA (2020 - 2022)</KeyPair>
              <ValuePair>Netaji Subhash Engineering College</ValuePair>
            </KeyValuePair>
          </div>
        </div>

        <div className="xl:w-1/2">
          <Skills />
        </div>
      </div>
    </Section>
  );
}

export default Experience;
