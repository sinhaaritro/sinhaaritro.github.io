import { useThemeContext } from "config/theme";

const Footer = () => {
    const { theme } = useThemeContext();

    return (
        <footer
            className={`p-2 text-center ${theme?.primary?.[800]} text-neutral-100 z-50`}
        >
            Made by Aritro Sinha
        </footer>
    );
};

export default Footer;
