import logo from '../../../assets/images/cups/logo1.png';
import '../navebar/navber.css'
const Navber = () => {
    return (
        <div className="bgimg h-[120px] flex gap-4 justify-center items-center">
            <div>
                <img className='w-20 h-24' src={logo} alt="" />
            </div>
            <div>
                <h1 className='md:text-6xl text-2xl font-ranco text-white'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Navber;