import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Product({ product }) {
  const { id, img, name, students, price } = product
  return (
    <div className="p-4">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg hover:shadow-sm transition-all">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={img}
          alt="blog"
        ></img>
        <div className="p-6">
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <h1 className="title-font text-xl md:text-3xl font-medium text-gray-900 mb-3">
              {name}
            </h1>
            <span className="min-w-[110px] text-2xl bg-yellow-300 px-3 py-1 rounded-sm text-blue-900 shadow">
              {price} Tk
            </span>
          </div>

          <div className="flex items-center flex-wrap mt-5">
            <Link
              to={`/courses/${id}`}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 border px-3 py-1 rounded text-xl cursor-pointer hover:bg-sky-200 "
            >
              Join Course
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-base pr-3 py-1 ">
              <AiOutlineUser /> {students} students
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
