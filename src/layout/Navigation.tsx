import ListButton from "components/Button/ListButton";
import { WithClassName } from "lib/interfaces/withClassName";

type NavigationProps = WithClassName<{ toggleNavMenuOpen: () => void }>;

function Navigation({ toggleNavMenuOpen }: NavigationProps) {
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact Me", link: "#contact" },
  ];

  const navigateTo = (link: string) => {
    window.location.replace(link);
    toggleNavMenuOpen();
  };

  return (
    <nav className="absolute top-16 inset-x-6 bg-neutral-100 rounded sm:inset-x-20 md:static md:bg-transparent">
      <ul className="flex flex-col items-center md:flex-row md:bg-inherit">
        {navLinks.map((navLink) => (
          <ListButton
            linkClick={() => navigateTo(navLink.link)}
            key={navLink.name}
            title={navLink.name}
            className="md:text-neutral-100 md:w-fit"
          >
            {navLink.name}
          </ListButton>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
