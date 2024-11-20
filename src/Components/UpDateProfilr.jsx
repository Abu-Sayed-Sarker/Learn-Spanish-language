import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const UpDateProfilr = () => {
    const { upDaterofile } = useContext(AuthContext)

    const navigat = useNavigate()

    const hendelUpDate = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const name = form.get("name");
        const photo = form.get("photo");
        console.log(name, photo);


        upDaterofile({ displayName: name, photoURL: photo })
            .then(() => {
                navigat("/MyProfile")
                window.location.reload();
            }).catch((err) => {
                const errorCode = err.code;
                toast.error(errorCode)
            })
        e.target.reset()
    }
    return (
        <div>
            <div className="lg:max-w-[50%] mx-auto mt-4">
                <h2 className="text-center font-semibold text-4xl">Update your account</h2>
                <form onSubmit={hendelUpDate} className="card-body">
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
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary bg-secound-color hover:bg-farst-color text-black hover:text-white">Update Naw</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpDateProfilr;