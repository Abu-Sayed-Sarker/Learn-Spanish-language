import { Link, useLoaderData } from "react-router-dom";
import LessonCard from "../Components/LessonCard";

const LetsLearning = () => {
    const h1 = "Let's Learn"
    const lessons = useLoaderData()
    
    return (
        <div>
            <h1 className="text-5xl font-bold text-fourth-color mt-6">{h1}</h1>

            <hr className="mt-9" />
            <div className="grid lg:grid-cols-3 gap-8 mt-4 grid-cols-1">
                {
                    lessons.map((lesson) => <LessonCard key={lesson.lesson_no} lesson={lesson}></LessonCard>)
                }
            </div>
            <hr className="mt-9" />

            <div>
                <h1 className="text-5xl font-bold text-fourth-color mt-6">Tutorial</h1>

                <div className="mt-12 grid lg:grid-cols-3 grid-cols-1 gap-6">
                    <div className="">
                        <iframe className="rounded-lg overflow-hidden" width="330" height="200" src="https://www.youtube.com/embed/arZ9PCqmCa4" title="The Spanish Alphabet: How to Say the Letters &amp; Sounds" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe className="rounded-lg overflow-hidden" width="330" height="200" src="https://www.youtube.com/embed/hyQGiYgIEos" title="Spanish Alphabet! | EL Abecedario / Fun &amp; Easy Spanish for Beginners #speaksphere" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe className="rounded-lg overflow-hidden" width="330" height="200" src="https://www.youtube.com/embed/84PqeEpHYF8" title="El Abecedario | Learn the Alphabet in Spanish | Jack Hartmann" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe className="rounded-lg overflow-hidden" width="330" height="200" src="https://www.youtube.com/embed/fCr79zwjzDo" title="Learn the Spanish ALPHABET for beginners // Spanish for Beginners" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <Link to={"/Tutorial"}><button className="btn bg-farst-color hover:bg-secound-color text-white mt-6 px-9">Vew More</button></Link>
            </div>


        </div>
    );
};

export default LetsLearning;