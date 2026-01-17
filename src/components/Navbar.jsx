import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <nav className=' font-[HalveticaLight] flex justify-between items-center p-4  h-20 w-full '>
         <div className='h-full w-[20%]  p-2.5 flex gap-2.5 items-center justify-center'>
            <div className='w-10 h-10'>
          
                <img className='h-full w-full object-cover' src="https://ik.imagekit.io/sheryians/light-logo_lNzGXRRlQ.png" alt="" />
            </div>
            <div className="text-white">
                <h4 className='font-medium opacity-90'>Sheriyans</h4>
                <h4>coding school</h4>
            </div>
        </div>



        {/* right */}
        <div className='h-full w-[60%] flex  items-center justify-between p-4'>
             <Link  className='text-white py-2.5 px-5 text-sm'  to="/">Home</Link>
             <Link  className='text-white py-2.5 px-5 text-sm' to="/course">Courses</Link>
              <Link  className='text-white py-2.5 px-5 text-sm' to="/bootcamp">Bootcamps</Link>
               <Link  className='text-white py-2.5 px-5 text-sm' to="/callback">Request Callback</Link>
               <Link  className='text-white py-2.5 px-5 text-sm' to="/classroom">Classroom</Link>
            <h4 className='text-white py-2.5 px-5 text-sm'><i className="ri-notification-2-fill"></i></h4>
            <img  className='h-8 w-8 rounded-full object-cover' src="https://lh3.googleusercontent.com/a/ACg8ocIErQ0DcldzUFQjNzGi48uLtjLWU1hx0mo_HHcEWHY9tzq11ymB=s96-c" alt="" />
        </div>
       </nav>
    </div>
  )
}

export default Navbar