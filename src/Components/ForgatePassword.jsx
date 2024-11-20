import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const ForgatePassword = () => {

    const { Value, reasetPassword } = useContext(AuthContext)

    const henselSubmission = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        reasetPassword(email)
        .then(() => {
            toast.success("Reaset password")
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(errorCode)
            // ..
          });
        
        
        
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col bg-third-color p-10 rounded-2xl">
                <h2 className="text-center font-semibold text-4xl">Reset Password</h2>
                <form onSubmit={henselSubmission} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required value={Value} />
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary bg-secound-color hover:bg-farst-color">Reset Naw</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgatePassword;