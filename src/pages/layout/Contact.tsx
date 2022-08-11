import Section from "layout/Section/Section";
import SectionTitle from "layout/Section/SectionTitle";
import SocialIcons from "layout/SocialIcons";

function Contact() {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <div className="p-3 flex flex-col gap-4 text-center sm:px-6 md:px-12">
        <p>
          Have a project in mind? Feel free to contact me at
          sinhaaritro@gmail.com. I'll try to respond as quick as I can!
        </p>
        <p>I'm also available on some social media platforms:</p>
        <div className="bg-neutral-500 h-px w-full" />
        <SocialIcons />
      </div>
    </Section>
  );
}

export default Contact;
