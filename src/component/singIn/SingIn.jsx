import { useContext } from "react";
import { authContext } from "../authprovider/Authprovider";


const SingIn = () => {
    const { singin } = useContext(authContext);
    const handleSingIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);
        singin(email, pass)
            .then(result => {
                
                console.log(result.user);
                const user = {
                    email,
                    lastLoginAt: result.user?.metadata?.lastSignInTime


                }
                fetch('https://practice-server-ltdw5xolq-shafrin-akters-projects.vercel.app/user',{
                    method: 'PATCH',
                    headers:{
                        'content-type':'applicaton/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    
                })
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSingIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;