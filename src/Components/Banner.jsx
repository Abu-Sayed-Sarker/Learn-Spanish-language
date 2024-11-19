

const Banner = () => {
    return (
        <div className="mt-3">
            <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover lg:w-10/12 rounded-3xl overflow-hidden mx-auto">
                <div className="backdrop-blur-md text-center">
                    <h4 className="uppercase font-semibold lg:text-2xl text-xl text-secound-color pt-12">Let selebrate</h4>
                    <div className="max-w-[60%] mx-auto pt-5">
                        <h1 className="font-bold lg:text-9xl text-4xl text-fourth-color border-dotted border">SPANISH</h1>
                    </div>
                    <p className="max-w-[60%] mx-auto text-secound-color pb-28 py-5">Spanish is one of the most popular languages today, so if you want to learn Spanish, log in now and start your Spanish learning journey.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;