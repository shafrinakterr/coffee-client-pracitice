import { Link, useLoaderData } from "react-router-dom";
import Banner from "../header/banner/Banner";
import BannerCard from "../header/banner/bannerCard/BannerCard";
import CoffeeCard from "../addCoffee/coffee/CoffeeCard";
import { BsCup } from 'react-icons/bs';
const Home = () => {
    const coffees = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <div className="mt-20">
                <div>
                    <p className="text-center">--- Sip & Savor ---</p>
                    <h1 className="font-ranco text-4xl text-[#331A15] font-semibold text-center">Our Popular Products</h1>
                    <Link to='/coffee'>
                        <button className="btn bg-[#E3B577] hover:bg-[#e3b47700] mt-5 flex justify-center mx-auto hover:border-[#331A15] font-ranco">Add coffee <BsCup className="text-[#331A15]"></BsCup></button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20">
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;