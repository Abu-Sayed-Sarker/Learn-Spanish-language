import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const navigate = useNavigate()
    


    const hendelSignOutButton = () => {
        LogOut()
            .then(() => {
                toast.success("Log Out Success");
                navigate("/")
            
            })
            .catch((error) => {
                console.log(error);
                
              });
    }

    return (
        <div>
            {
                user? <div className="flex w-11/12 mx-auto justify-between py-2">
                <h4 className="font-semibold text-xl uppercase">
                    {
                        user?.displayName

                    }
                </h4>

                <h4 className="font-semibold text-xl">
                    {
                        user?.email
                    }
                </h4>

            </div> : ""
            }
            {
                user? <hr className="border-1 border-secound-color" /> : ""
            }
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"Letslearn"}>Start-Learning</NavLink>
                            <NavLink to={"Tutorial"}>Tutorials</NavLink>
                            <NavLink to={"MyProfile"}>My-profile</NavLink>
                        </ul>
                    </div>
                    <a className="text-fourth-color font-bold text-xl">Word Up</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"Letslearn"}>Start-Learning</NavLink>
                        <NavLink to={"Tutorial"}>Tutorials</NavLink>
                        <NavLink to={"MyProfile"}>My-profile</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user?.email ? <button onClick={hendelSignOutButton} className="btn bg-secound-color hover:bg-farst-color">Log Out</button> : <Link to={"Login"}><button className="btn bg-secound-color hover:bg-farst-color">Log In</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;