import React from 'react'

function SuccessCard({ result }) {
  const { id, icon, total, quote, details } = result

  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col justify-center items-center shadow-md hover:shadow-sm transition-all">
        <img className="w-20 " src={icon} alt="" />
        <h2 className="title-font font-medium text-3xl text-gray-900">
          {total} <span>{quote}</span>
        </h2>
        <p className="leading-relaxed">{details}</p>
      </div>
    </div>
  )
}

export default SuccessCard
