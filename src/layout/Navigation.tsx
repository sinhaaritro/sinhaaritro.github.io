import { useThemeContext } from "config/theme";
import { WithClassName } from "lib/interfaces/withClassName";

type NavigationProps = WithClassName<{ toggleNavMenuOpen: () => void }>;

function Navigation({ toggleNavMenuOpen }: NavigationProps) {
  const { theme } = useThemeContext();

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
    <nav
      className={`absolute top-16 inset-x-6 ${theme?.neutral?.[100]} rounded md:static`}
    >
      <ul className="flex flex-col md:flex-row md:bg-inherit items-center">
        {navLinks.map((navLink) => (
          <li
            className={`w-full flex text-center first:rounded-t last:rounded-b hover:${theme?.neutral?.[200]}`}
            onClick={() => navigateTo(navLink.link)}
            tabIndex={0}
            key={navLink.name}
          >
            <div className="grow m-1 font-medium p-2 rounded text-neutral-900">
              {navLink.name}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
