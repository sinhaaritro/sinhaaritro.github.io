import SimpleIcon from "../components/SimpleIcon";

function SocialIcons() {
  const iconSlug: Array<string> = [
    "Discord",
    "Facebook",
    "Gmail",
    "Youtube",
    "Twitter",
  ];

  return (
    <div className="flex gap-2 place-content-center px-2 py-1 font-semibold rounded-full">
      {iconSlug.map((icon) => (
        <SimpleIcon
          key={icon}
          iconName={icon}
          className="bg-neutral-700 fill-neutral-200 rounded p-1 h-10 w-10 "
        />
      ))}
    </div>
  );
}

export default SocialIcons;
