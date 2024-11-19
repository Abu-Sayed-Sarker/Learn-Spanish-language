import team1 from "../assets/team-1.jpg"
import team2 from "../assets/team-2.jpg"
import team3 from "../assets/team-3.jpg"
const MeetOurTeem = () => {
    return (
        <div className="mt-24">
            <h1 className="text-5xl font-bold text-fourth-color">Meet Our Team</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-16 gap-6">
                <div className="border border-dotted rounded-2xl">
                    <div>
                        <img className="rounded-2xl" src={team1} alt="" />
                    </div>
                    <div className="p-4">
                        <h1 className="font-bold text-2xl text-secound-color pt-8">Juan Lawrence</h1>
                        <p >Instructor</p>
                    </div>
                </div>

                <div className="border border-dotted rounded-2xl">
                    <div>
                        <img className="rounded-2xl" src={team2} alt="" />
                    </div>
                    <div className="p-4">
                        <h1 className="font-bold text-2xl text-secound-color pt-8">Sidney Ray</h1>
                        <p >Instructor</p>
                    </div>
                </div>

                <div className="border border-dotted rounded-2xl">
                    <div>
                        <img className="rounded-2xl" src={team3} alt="" />
                    </div>
                    <div className="p-4">
                        <h1 className="font-bold text-2xl text-secound-color pt-8">Suzanne Clanton</h1>
                        <p >Instructor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeem;