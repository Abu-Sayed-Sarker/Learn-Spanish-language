import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const MyProfile = () => {
    const { user, upDaterofile } = useContext(AuthContext)
    

    const hendelUpDate = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const name = form.get("name");
        const photo = form.get("photo");
        console.log(name, photo);
        

        upDaterofile({ displayName: name, photoURL: photo })
                .then(() => {
                }).catch ((err) => {
                    const errorCode = err.code;
                    toast.error(errorCode)
                })
                e.target.reset()
    }


    return (
        <div>
            <h1 className="lg:text-5xl text-3xl py-3 font-bold text-fourth-color">My Profile</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <div className="mt-4">
                        <img className="h-32 w-32 object-cover rounded-full" src="" alt="" />
                    </div>
                    <div className="space-y-2 mt-5">
                        <p className="font-semibold text-gray-600 text-xl">Name</p>
                        <p className="font-bold text-2xl uppercase">{ user.displayName}</p>
                        <p className="font-semibold text-gray-600 text-xl">Name</p>
                        <p className="font-bold text-2xl">{ user.email }</p>

                    </div>

                </div>
                <div>
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
                            <button className="btn btn-primary bg-secound-color hover:bg-farst-color">Update Naw</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;