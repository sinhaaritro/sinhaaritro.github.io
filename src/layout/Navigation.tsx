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
    <nav className="absolute top-16 inset-x-6 bg-neutral-100 rounded md:static">
      <ul className="flex flex-col md:flex-row md:bg-inherit items-center">
        {navLinks.map((navLink) => (
          <ListButton
            linkClick={() => navigateTo(navLink.link)}
            key={navLink.name}
            title={navLink.name}
          >
            {navLink.name}
          </ListButton>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
