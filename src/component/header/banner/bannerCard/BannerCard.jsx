import img1 from '../../../../assets/images/icons/1.png'
import img2 from '../../../../assets/images/icons/2.png'
import img3 from '../../../../assets/images/icons/3.png'
import img4 from '../../../../assets/images/icons/4.png'


const BannerCard = () => {
    return (
        <div className="bg-[#ECEAE3] py-5">
            <div className='max-w-5xl  lg:flex justify-around items-center gap-20 mx-auto'>
                <div className='space-y-3'>
                    <img  src={img1} alt="" />
                    <h2 className='text-[#331A15] text-xl font-ranco font-semibold '>Awesome Aroma</h2>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div  className="space-y-3 ">
                    <img  src={img2} alt="" />
                    <h2 className='text-[#331A15] text-xl font-ranco font-semibold '>Awesome Aroma</h2>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div  className="space-y-3 ">
                    <img src={img3} alt="" />
                    <h2 className='text-[#331A15] text-xl font-ranco font-semibold '>Awesome Aroma</h2>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div  className="space-y-3">
                    <img src={img4} alt="" />
                    <h2 className='text-[#331A15] text-xl font-ranco font-semibold '>Awesome Aroma</h2>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;