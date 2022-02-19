import Text from "components/Text";
import Button from "components/Button";
import Chip from "components/Chip";
import openLinkInNewTab from "lib/hooks/openLinkInNewTab";
import contactData from "data/contact.json";

const Contact = () => {
    return (
        <section id="contact" className="p-4">
            <Text className="text-4xl font-semibold" htmlElement={"h1"}>
                Contact
            </Text>
            <div className="py-4 px-2">
                <div className="text-lg">
                    Got a idea or looking for employee / freelancer.
                </div>
                <div className="text-lg">Find me at:</div>
                <div className="flex flex-wrap normal-case">
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
