import React from 'react'
import Star from './Star'
export default function ReviewCard({reviews}) {
  const { userName, rating, createdAt, comment, avatar } = reviews
  return (
    <div className='flex items-start p-4 mb-4'>
      <img
        src={avatar}
        alt="User Avatar"
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <h3 className="text-lg font-medium text-[#555FD9] mr-2">{userName}</h3>
          <span className="text-[#ab2727]">
            <Star rating={rating}/>
          </span>
        </div>
        <p className="text-gray-600 mb-2">{new Date(createdAt).toLocaleDateString()}</p>
        <p className="text-gray-700">{comment}</p>
      </div>
    </div>
  )
}
