import { useThemeContext } from "config/theme";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

function HomePage() {
  const { theme } = useThemeContext();

  return (
    <div id="home" className={`${theme?.primary?.[300]} text-neutral-900`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;
