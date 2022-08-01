import { SubTitle } from "components/Typography";
import SocialIcons from "layout/SocialIcons";

function Contact() {
  return (
    <section
      id="contact"
      className="my-3 mx-2 max-w-screen-xl flex flex-col place-content-around h-full grow rounded-2xl drop-shadow bg-primary-100"
    >
      <SubTitle className="rounded-t-2xl border-b border-neutral-400 p-2 text-4xl">
        Contact
      </SubTitle>
      <div className="p-3 flex flex-col gap-4 text-center sm:px-6 md:px-12">
        <p>
          Have a project in mind? Feel free to contact me at
          sinhaaritro@gmail.com. I'll try to respond as quick as I can!
        </p>
        <p>I'm also available on some social media platforms:</p>
        <div className="bg-neutral-500 h-px w-full" />
        <SocialIcons />
      </div>
    </section>
  );
}

export default Contact;
