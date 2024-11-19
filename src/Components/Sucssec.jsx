import CountUp from "react-countup";

const Sucssec = () => {
    return (
        <div className="mt-24">
            <h1 className="text-5xl font-bold text-fourth-color">Our Success</h1>
            <div className="bg-third-color rounded-3xl mt-10">
                <div className="p-4 grid lg:grid-cols-3 grid-cols-1">
                    <div className="text-center py-3">
                        <h1 className="text-6xl font-bold"><CountUp end={23445} duration="5"></CountUp></h1>
                        <h4 className="text-2xl font-semibold pt-4">User</h4>
                    </div>
                    <div className="text-center py-3">
                        <h1 className="text-6xl font-bold"><CountUp end={230} duration="5"></CountUp></h1>
                        <h4 className="text-2xl font-semibold pt-4">Lessons</h4>
                    </div>
                    <div className="text-center py-3">
                        <h1 className="text-6xl font-bold"><CountUp end={1293455} duration="5"></CountUp></h1>
                        <h4 className="text-2xl font-semibold pt-4">Tutorial</h4>
                    </div>
                    
                </div>
                 
            </div>
        </div>
    );
};

export default Sucssec;