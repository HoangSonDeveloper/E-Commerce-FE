import React from 'react'
import Link from 'next/link'
export default function CourseCard({course,name}) {
  return (
    <div key={course.id} className="w-full p-4 cursor-pointer"> 
        <div className="h-auto border-2 border-gray-200 border-opacity-60 rounded-[14px] overflow-hidden transform transition duration-300 hover:scale-105">
            <img 
                className="h-60 w-full object-cover object-center " 
                src={course.image} 
                alt={course.name} 
            />
            <div className="p-4 bg-white">
                <p className="tracking-widest text-sm title-font font-medium text-gray-700 mb-1">  
                    {name}
                </p>
                <Link 
                    className="title-font text-lg font-medium text-[#555FD9] hover:text-red-500 mb-3" 
                    href=""
                >
                    {course.name}
                </Link>
                <p className="text-[#ab2727] font-bold mb-3 pt-2"> {course.price} VND </p>
                <p className="leading-relaxed mb-3"> {course.desc} </p>
                <div className='flex justify-center'>
                    <button 
                        className="  py-2 px-20 rounded-[96px] bg-[#FF7426] text-white hover:bg-[#cf550e] transition"
                    >
                        Join Course
                    </button>
                </div>
            </div>
        </div>
    </div>

  )
}
