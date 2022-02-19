const AboutMe = () => {
    return (
        <section
            id="about-me"
            className="flex flex-col md:flex-row items-center place-items-center py-16 px-16"
        >
            <section id="about-me-short" className="grow pb-16 md:pb-0">
                <p className="text-7xl font-bold">Aritro Sinha</p>
                <p className="text-3xl">Student, athlete, programmer</p>
            </section>
            <section
                id="about-me-details"
                className="border-2 border-slate-900 rounded-xl p-2 max-w-md"
            >
                <div className="border-2 border-slate-900 rounded-lg p-2 font-medium">
                    Aritro Sinha
                </div>
                <div className="grid grid-cols-3 border-l-2 border-slate-900 px-2 mt-2 font-medium">
                    <div className="text-slate-600">Home</div>
                    <div className="col-span-2">Kolkata, India</div>
                    <div className="text-slate-600">Age</div>
                    <div className="col-span-2">23</div>
                    <div className="text-slate-600">Eduction</div>
                    <div className="col-span-2">
                        <ul className="list-disc list-inside">
                            <li>Netaji Subhash Engineering College</li>
                            <li>Techno India University</li>
                        </ul>
                    </div>
                    {/* <div className="text-slate-600">Age</div>
                    <div className="col-span-2">23</div> */}
                    <div className="text-slate-600">Passions</div>
                    <div className="col-span-2">
                        <div>Programming</div>
                        <div>Building</div>
                        <div>Learning</div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AboutMe;
