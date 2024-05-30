import AritroLogo from "assets/svg/AritroLogo";
import PrimaryButton from "components/Button/PrimaryButton";
import SubSectionTitle from "layout/Section/SubSectionTitle";
import SocialIcons from "layout/SocialIcons";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="my-3 px-2 mx-auto aspect-auto xl:flex xl:items-stretch "
    >
      <section
        id="about-me-main"
        className="flex flex-col grow rounded-2xl drop-shadow bg-primary-100 md:aspect-[16/7] xl:aspect-auto xl:grow"
      >
        <div className="grow flex flex-col gap-6 justify-around px-8 py-12">
          <div className="flex mx-auto">
            <AritroLogo width="100" height="100" />
          </div>

          <p className="text-5xl text-center font-bold">Aritro Sinha</p>
          <div className="flex flex-col gap-3 justify-center text-lg text-center md:flex-row md:gap-20 md:text-xl">
            <p>Web Developer</p>
            <p>Software Developer</p>
            <p>Game Developer</p>
          </div>
          <SocialIcons />
        </div>
        <PrimaryButton className="border-t border-neutral-500 rounded-t-none rounded-b-2xl text-base text-center">
          Download Resume
        </PrimaryButton>
      </section>
      <section
        id="about-me-details"
        className="mx-4 flex flex-col rounded-b-2xl drop-shadow bg-primary-100 xl:mx-0 xl:my-10 xl:rounded-bl-none xl:rounded-tr-2xl xl:border-l xl:border-neutral-500"
      >
        <SubSectionTitle className="xl:rounded-tr-2xl xl:border-t-0">
          About Me
        </SubSectionTitle>
        <div className="py-5 px-3 flex flex-col justify-evenly gap-6 text-center text-base sm:px-6 md:px-12 xl:grow">
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
      </section>
    </section>
  );
}

export default AboutMe;
