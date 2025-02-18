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
import PrivetRouter from "./PrivetRouter";
import UpDateProfilr from "../Components/UpDateProfilr";
import ForgatePassword from "../Components/ForgatePassword";

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
                loader: ()=> fetch("/lesson.json")
            },
            {
                path: "Tutorial",
                element: <PrivetRouter><Tutorial></Tutorial></PrivetRouter>
            },
            {
                path: "/MyProfile",
                element: <PrivetRouter><MyProfile></MyProfile></PrivetRouter>
            },
            {
                path: "/Letslearn/:id",
                element: <PrivetRouter><LessonNo></LessonNo></PrivetRouter>,
                loader: ()=> fetch("/vocabulary.json")
            },
            {
                path: "/Login",
                element: <Login></Login>
            },
            {
                path: "/ragister",
                element: <Register></Register>
            },
            {
                path: "/update-profile",
                element: <PrivetRouter><UpDateProfilr></UpDateProfilr></PrivetRouter>
            },
            {
                path: "/Forgat",
                element: <ForgatePassword></ForgatePassword>
            }
        ],
    },
    {
        path: "/*",
        element: <Error></Error>
    }
])

export default Router;