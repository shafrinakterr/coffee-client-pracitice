import { Link} from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';
import Swal from "sweetalert2";
const AddCoffee = () => {
    const haddleSubmitForm = e =>{
        e.preventDefault()
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {coffeeName, chef, supplier, taste, category, details, photo}
        console.log(newCoffee);
        fetch('https://practice-server-ltdw5xolq-shafrin-akters-projects.vercel.app/coffee',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-center',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'coffee add successfully'
                  })
            }
        })
    }
    return (
        <div className="mt-10 max-w-6xl mx-auto">
            <Link to='/'>
                <button className="font-ranco flex  items-center gap-2 text-[#374151] font-semibold text-2xl"><BsArrowLeft></BsArrowLeft> Back to home</button>
            </Link>
            <div className="bg-[#F4F3F0] mt-10 p-4 md:p-24">
                <div className="text-center md:w-8/12 mx-auto space-y-5">
                    <h1 className="font-ranco font-semibold text-6xl ">Add New Coffee</h1>
                    <p className="text-lg">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={haddleSubmitForm} className="space-y-3">
                    {/* form row */}
                    <div className="md:flex gap-6 mt-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Coffee name</span>
                            </label>
                            <label>
                                <input type="text" placeholder="Enter coffee name" name="coffeeName" className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control rounded-lg md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Chef</span>
                            </label>
                            <label className=" ">
                                <input type="text" name="chef" placeholder="Enter coffee chef" className="input  w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex gap-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Supplier</span>
                            </label>
                            <label>
                                <input type="text" placeholder="Enter coffee supplier" name="supplier" className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control rounded-lg md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Taste</span>
                            </label>
                            <label className=" ">
                                <input type="text" name="taste" placeholder="Enter coffee taste" className="input  w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex gap-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Category</span>
                            </label>
                            <label>
                                <input type="text" placeholder="Enter coffee category" name="category" className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control rounded-lg md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Details</span>
                            </label>
                            <label className=" ">
                                <input type="text" name="details" placeholder="Enter coffee details" className="input  w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Photo</span>
                            </label>
                            <label>
                                <input type="text" placeholder="Enter coffee URL" name="photo" className="input w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6">
                        <div className="form-control w-full" >
                            <input className="bg-[#D2B48C] mt-5 border-2 border-[#331A15] p-3 font-ranco font-semibold text-lg rounded-lg" type="submit" value="Add Coffee" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;