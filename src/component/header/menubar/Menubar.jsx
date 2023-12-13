import { NavLink } from "react-router-dom";


const Menubar = () => {
    return (
        <div className="flex gap-5 w-1/2 mx-auto mt-10 mb-20">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/coffee'>coffee</NavLink>
            <NavLink to='/instagram'>Instagram</NavLink>
            <NavLink to='/singIn'>Sing In</NavLink>
            <NavLink to='/singUp'>Sing Up</NavLink>
            <NavLink to='/user'>User</NavLink>
        </div>
    );
};

export default Menubar;