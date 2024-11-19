import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createNewUser, setuser} = useContext(AuthContext)
    const henselSubmission = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photo);
        


        createNewUser(email, password)

        .then((result) => {
            const user = result.user;
            setuser(user)
            e.target.reset()
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            
            // ..
          });
    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-center font-semibold text-4xl">Register your account</h2>
                <form onSubmit={henselSubmission} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Past your photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary bg-secound-color hover:bg-farst-color">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Already Have An Account ? <Link to={"/Login"} className="text-red-600">Log In</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Register;