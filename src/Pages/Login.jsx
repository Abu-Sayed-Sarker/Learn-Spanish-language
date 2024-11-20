import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const { LogIn, setuser, googleLogIn, setValue } = useContext(AuthContext)


    const Location = useLocation()
    const navigat = useNavigate()
    const Provider = new GoogleAuthProvider()

    

    const googleLogInBtn = () => {
        googleLogIn(Provider)
        .then((result) => {
            setuser(result.user)
            navigat(Location.state ? Location.state : "/")
                toast.success("Log In Success");
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                toast.error(errorCode)
            })
    }

    
    const inputValue = event => {
        setValue(event.target.value);
        
    }
    
    
    


    const handleLoginSubmission = e => {
        e.preventDefault()
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        LogIn(email, password)
            .then((result) => {
                const user = result.user;
                setuser(user)
                navigat(Location.state ? Location.state : "/")
                e.target.reset();
                toast.success("Log In Success");

            })
            .catch((error) => {
                const errorCode = error.code;

                toast.error(errorCode)
                

            });
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card bg-third-color w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-center font-semibold text-4xl">Login your account</h2>
                <form onSubmit={handleLoginSubmission} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={inputValue} name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to={"/Forgat"}><a href="#" className="label-text-alt link link-hover">Forgot password?</a></Link>
                        </label>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary bg-secound-color hover:bg-farst-color text-black hover:text-white">Login</button>
                    </div>
                </form>
                    <div className="mx-auto pb-3">
                        <button onClick={googleLogInBtn} className="text-left btn bg-transparent bg-secound-color hover:bg-farst-color hover:text-white"><FaGoogle /> Login with Google</button>
                    </div>
                <p className="text-center font-semibold">Dont’t Have An Account ? <Link to={"/ragister"} className="text-red-600">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;