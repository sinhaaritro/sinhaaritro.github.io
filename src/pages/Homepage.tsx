import { useThemeContext } from "config/theme";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

function HomePage() {
  const { theme } = useThemeContext();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div
        id="home"
        className="font-nunito bg-primary-300 text-neutral-900 dark:bg-slate-900"
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
