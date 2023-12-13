import { AiFillDelete, AiOutlineEye } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee }) => {
    const { _id, coffeeName, chef, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://practice-server-ltdw5xolq-shafrin-akters-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className=" shadow-xl w-full p-5 flex gap-5 bg-[#F5F4F1]">
                <figure>
                    <img className="minx-w-[185px]  mix-h-[ 239px]" src={photo} alt="Shoes" />
                </figure>
                <div className="flex w-full px-5 items-center justify-between gap-10 min-h-[10px]">
                    <div className='space-y-3'>
                        <h2 className='flex w-full items-center justify-between'><span className="text-lg font-semibold">Name: </span>{coffeeName}

                        </h2>
                        <p><span className="text-lg font-semibold">Chef: </span>{chef}

                        </p>
                        <p><span className="text-lg font-semibold">Price: </span>890


                        </p>
                    </div>
                    <div className='flex flex-col justify-center gap-5 rounded-lg'>

                        <button className="btn bg-[#D2B48C] hover:bg-[#D2B48C] text-xl"><AiOutlineEye className='text-white'></AiOutlineEye></button>



                        <Link to={`/updatedCoffee/${_id}`}>
                            <button className="btn bg-[#3C393B] hover:bg-[#D2B48C] text-xl"><MdModeEditOutline className='text-white'></MdModeEditOutline></button>
                        </Link>


                        <button onClick={() => handleDelete(_id)} className=" btn bg-[#EA4744] hover:bg-[#D2B48C] text-xl text-center"><AiFillDelete className='text-white'></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
CoffeeCard.propTypes={
    coffee: PropTypes.object
}
export default CoffeeCard;