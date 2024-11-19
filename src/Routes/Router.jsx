import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import Home from "../Pages/Home";
import LetsLearning from "../Pages/LetsLearning";
import Tutorial from "../Pages/Tutorial";
import MyProfile from "../Pages/MyProfile";
import LessonNo from "../Components/LessonNo";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts></Layouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "Letslearn",
                element: <LetsLearning></LetsLearning>,
                loader: ()=> fetch("lesson.json")
            },
            {
                path: "Tutorial",
                element: <Tutorial></Tutorial>
            },
            {
                path: "MyProfile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "Letslearn/:id",
                element: <LessonNo></LessonNo>,
                loader: ()=> fetch("vocabulary.json")
            },
            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "ragister",
                element: <Register></Register>
            }
        ],
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default Router;