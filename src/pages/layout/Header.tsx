import AritroLogo from "assets/svg/AritroLogo";
import MenuIcon from "assets/svg/MenuIcon";
import PrimaryButton from "components/Button/PrimaryButton";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navigation from "../../layout/Navigation";

function Header() {
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenuOpen = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const isShowingFullNavigation = !isMediumScreen && isNavMenuOpen;

  return (
    <header className="relative drop-shadow-xl bg-neutral-600 z-50 px-2">
      <div className="flex items-center justify-between mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-row my-auto p-2 px-4">
          <AritroLogo />
        </div>

        {!isMediumScreen ? (
          <PrimaryButton
            className="m-2 mx-4 rounded hover:bg-inherit"
            onClick={toggleNavMenuOpen}
          >
            <MenuIcon />
          </PrimaryButton>
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
