import React from 'react'
import {useGetPackagesQuery} from "../../../redux/api/packageApiSlice"
import { Link } from 'react-router';
// import SearchPackage from './SearchPackage';
const Packages = () => {
    const {data : packages} = useGetPackagesQuery()
    // console.log(data);
    
  return (
    <div className=' mb-10'>
  
    <h1 className=' text-3xl font-extrabold mb-20  text-center mt-20'>Our Packages</h1>
        <div className=' grid grid-cols-3 gap-4 shadow-xl'>
        {
            packages?.map((p)=>(
                <div key={p?._id}>
                  
    <Link to={`/package/${p._id}`}>
    <figure>
      <img
        src={p?.image}
        alt="packages" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{p?.name}</h2>
      <p>{p?.description}</p>
    </div>
      <div className="card-actions justify-end">
        <Link to="/addbooking">
        
        <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </Link>
      
    </div>
            ))
        }
  </div>
  </div>
//   </div>
  )
}

export default Packages