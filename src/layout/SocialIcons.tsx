import SimpleIcon from "components/SimpleIcon";
import openLinkInNewTab from "lib/hooks/openLinkInNewTab";
import { WithClassName } from "lib/interfaces/withClassName";

type SocialIconsProps = WithClassName<{ iconClassname?: string }>;

type SocialIconI = {
  icon: string;
  text?: string;
  link: string;
  color?: string;
};

function SocialIcons({ iconClassname = "", className = "" }: SocialIconsProps) {
  // const iconSlug: Array<string> = [
  //   "Discord",
  //   "Facebook",
  //   "Gmail",
  //   "Youtube",
  //   "Twitter",
  // ];

  const contactList: Array<SocialIconI> = [
    { icon: "Discord", link: "", text: "" },
    {
      icon: "Gmail",
      link: "sinhaaritro@gmail.com",
      text: "sinhaaritro@gmail.com",
    },
    {
      icon: "Github",
      link: "https://github.com/sinhaaritro",
      text: "sinhaaritro",
    },
    { icon: "Youtube", link: "", text: "" },
    { icon: "Twitter", link: "", text: "" },
    {
      icon: "Linkedin",
      link: "https://www.linkedin.com/in/aritro-sinha-98045a1a7/",
      text: "Aritro Sinha",
    },
  ];

  return (
    <div className={`flex gap-3 justify-center rounded-full ${className}`}>
      {contactList.map((contact) => (
        <button
          key={contact.icon}
          type="button"
          onClick={() => openLinkInNewTab(contact.link)}
        >
          <SimpleIcon
            iconName={contact.icon}
            className={`bg-neutral-700 fill-neutral-200 rounded p-1 ${iconClassname}`}
          />
        </button>
      ))}
    </div>
  );
}

export default SocialIcons;
