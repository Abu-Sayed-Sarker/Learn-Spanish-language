import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import VokebolaryCard from "./VokebolaryCard";

const LessonNo = () => {
    const { id } = useParams()
    const vokebolary = useLoaderData()

    const [Data, setData] = useState([]);
    useEffect(() => {
        const newData = vokebolary.filter(V => V.lesson_no == id)
        setData(newData)
    }, [id, vokebolary])


    console.log(id);
    console.log(Data);

    return (
        <div>
            <h1 className="lg:text-5xl text-3xl py-4 font-bold text-fourth-color">Lessons({id})</h1>
            <div className="mt-6 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    Data.map((singleData) => <VokebolaryCard key={singleData.id} singleData={singleData}></VokebolaryCard>)
                }
            </div>
            <div>
                <Link to={"/Letslearn"}><button className="btn bg-farst-color hover:bg-secound-color text-white mt-6 px-9">Back to Lesson</button></Link>
            </div>
        </div>
    );
};

export default LessonNo;