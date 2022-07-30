import { WithClassName } from "lib/interfaces/withClassName";
import SimpleIcon from "../components/SimpleIcon";

type SocialIconsProps = WithClassName<{ iconClassname?: string }>;

function SocialIcons({ iconClassname, className }: SocialIconsProps) {
  const iconSlug: Array<string> = [
    "Discord",
    "Facebook",
    "Gmail",
    "Youtube",
    "Twitter",
  ];

  return (
    <div
      className={`flex gap-3 place-content-center rounded-full ${className}`}
    >
      {iconSlug.map((icon) => (
        <SimpleIcon
          key={icon}
          iconName={icon}
          className={`bg-neutral-700 fill-neutral-200 rounded p-1 ${iconClassname}`}
        />
      ))}
    </div>
  );
}

export default SocialIcons;
