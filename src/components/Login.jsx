import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {useNavigate} from "react-router-dom";
 

const Login = () => {

    const {userSignIn,signInWithGoogle}=useContext(AuthContext);
    const navigate = useNavigate();

    const handelLogin=(e)=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);

        userSignIn(email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user);
            e.target.reset();
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const handelGoogleSignIn =()=>{
        signInWithGoogle()
        .then((result)=>{
            const user=result.user;
            console.log(user);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center mb-4">
                    <h1 className="text-5xl font-bold">Login Now</h1>
                    </div>
                    <div className="card shrink-0 px-10 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <p><button onClick={handelGoogleSignIn} className="btn btn-ghost">Log in with Google</button></p>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;