import AritroLogo from "assets/svg/AritroLogo";
import Button from "components/Button";
import { useThemeContext } from "config/theme";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navigation from "./Navigation";

function Header() {
  const isMediumScreen = useMediaQuery({ query: "(min-width: 769px)" });
  const { theme } = useThemeContext();

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenuOpen = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const isShowingFullNavigation = !isMediumScreen && isNavMenuOpen;

  return (
    <header
      className={`relative p-4 drop-shadow-lg  ${theme?.neutral?.[600]} z-50`}
    >
      <div className="flex place-content-between mx-auto max-w-screen-xl">
        <div>
          <AritroLogo />
        </div>

        {!isMediumScreen ? (
          <Button onClick={toggleNavMenuOpen}>Menu</Button>
        ) : (
          <Navigation toggleNavMenuOpen={toggleNavMenuOpen} />
        )}

        {isShowingFullNavigation && (
          <Navigation toggleNavMenuOpen={toggleNavMenuOpen} />
        )}
      </div>
    </header>
  );
}

export default Header;
