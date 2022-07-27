import AritroLogo from "assets/svg/AritroLogo";
import MenuIcon from "assets/svg/MenuIcon";
import Button from "components/Button";
import { useThemeContext } from "config/theme";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navigation from "../../layout/Navigation";

function Header() {
  const isMediumScreen = useMediaQuery({ query: "(min-width: 769px)" });
  const { theme } = useThemeContext();

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenuOpen = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const isShowingFullNavigation = !isMediumScreen && isNavMenuOpen;

  return (
    <header className={`relative drop-shadow-xl ${theme?.neutral?.[600]} z-50`}>
      <div className="flex justify-between mx-auto max-w-screen-xl">
        <div className="flex flex-row my-auto p-2 px-4">
          <AritroLogo />
        </div>

        {!isMediumScreen ? (
          <Button
            className="m-2 mx-4 rounded hover:bg-inherit"
            onClick={toggleNavMenuOpen}
          >
            <MenuIcon />
          </Button>
        ) : (
          <Navigation toggleNavMenuOpen={toggleNavMenuOpen} />
        )}
      </div>
      {isShowingFullNavigation && (
        <Navigation toggleNavMenuOpen={toggleNavMenuOpen} />
      )}
    </header>
  );
}

export default Header;
