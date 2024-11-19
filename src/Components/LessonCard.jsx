/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const LessonCard = ({ lesson }) => {
    
    
    return (
        <div>
            <Link to={`/Letslearn/${lesson.lesson_no}`}>
                <div className="card bg-third-color hover:bg-secound-color active:bg-farst-color active:text-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Lesson: { lesson.lesson_no }</h2>
                        <h3 className="font-bold">{ lesson.title }</h3>
                        <p className="">{ lesson.description }</p> 
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default LessonCard;