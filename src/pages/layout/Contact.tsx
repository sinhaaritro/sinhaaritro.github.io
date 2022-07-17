import Button from "components/Button";
import Chip from "components/Chip";
import Text from "components/Text";
import { useThemeContext } from "config/theme";
import contactData from "data/contact.json";
import SocialIcons from "layout/SocialIcons";
import openLinkInNewTab from "lib/hooks/openLinkInNewTab";

const Contact = () => {
    const { theme } = useThemeContext();
    return (
        <section
            id="contact"
            className={`m-8 mx-auto max-w-screen-xl flex flex-col place-content-around h-full grow rounded-2xl drop-shadow ${theme?.primary?.[100]} `}
        >
            <Text
                className={`text-4xl font-semibold rounded-t-2xl border-b border-neutral-500 p-2 text-center ${theme?.primary?.[200]}`}
                htmlElement={"h1"}
            >
                Contact
            </Text>
            <div className="py-4 px-2 text-center text-lg">
                <div className="">
                    Have a project in mind? Feel free to contact me at
                    sinhaaritro@gmail.com. I'll try to respond as quick as I
                    can!
                </div>
                <div className="">
                    I'm also available on some social media platforms:
                </div>
                <SocialIcons />
                <div className="flex flex-wrap place-content-center normal-case">
                    {contactData.map(({ link, ...contact }, i) => {
                        return (
                            <Button
                                key={i}
                                variant="link"
                                onClick={() => openLinkInNewTab(link)}
                            >
                                <Chip {...contact} />
                            </Button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Contact;
