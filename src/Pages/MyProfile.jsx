import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    

    


    return (
        <div>
            <h1 className="lg:text-5xl text-3xl py-3 font-bold text-fourth-color">{ user.displayName }</h1>
            <div className="">
                <div className="flex flex-col items-center">
                    <div className="mt-4">
                        <img className="h-32 w-32 object-cover rounded-full" src={user.photoURL} alt="" />
                    </div>
                    <div className="space-y-2 mt-5 text-center pb-5">
                        <p className="font-semibold text-gray-600 text-xl">Name</p>
                        <p className="font-bold text-2xl uppercase">{ user.displayName}</p>
                        <p className="font-semibold text-gray-600 text-xl">Email</p>
                        <p className="font-bold text-2xl">{user.email}</p>
        

                    </div>
                    <Link to={"/update-profile"}><button className="btn btn-primary text-black hover:text-white bg-secound-color hover:bg-farst-color">Update Naw</button></Link>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;