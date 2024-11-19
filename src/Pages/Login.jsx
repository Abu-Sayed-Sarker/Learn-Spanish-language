import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const { LogIn, setuser } = useContext(AuthContext)


    const Location = useLocation()
    const navigat = useNavigate()

    const [Error, setError] = useState({})


    const handleLoginSubmission = e => {
        e.preventDefault()
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        LogIn(email, password)
            .then((result) => {
                const user = result.user;
                setuser(user)
                navigat(Location?.state ? Location.state : "/")
                e.target.reset();

            })
            .catch((err) => {
                const errorCode = err.code;
                setError({ login: errorCode })

            });
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-center font-semibold text-4xl">Login your account</h2>
                <form onSubmit={handleLoginSubmission} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="text-sm text-red-600">
                            {Error}
                        </label>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary bg-secound-color hover:bg-farst-color">Login</button>
                    </div>
                    <div className="mx-auto mt-3">
                        <button className="text-left btn bg-transparent bg-secound-color hover:bg-farst-color hover:text-white"><FaGoogle /> Login with Google</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Dont’t Have An Account ? <Link to={"/ragister"} className="text-red-600">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;