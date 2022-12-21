import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import banner from '../../assets/images/banner.jpg'
function Banner() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5  mt-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-red-500">
              Are you ready to learn?
            </h1>

            <h1 className="text-2xl md:text-8xl text-blue-500">
              Skils Gurus <span className="text-yellow-500"> Education</span>
            </h1>
            <p className="mb-8 leading-relaxed mt-10 text-2xl">
              Skils Guru created 10000+ students with skill development and
              market support for client & jobs. We are providing premium content
              support & Google classroom facility with live classes and more.
            </p>
            <div className="flex justify-center items-center">
              <Link
                to="/courses"
                className="flex justify-center items-center gap-2 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg font-semibold"
              >
                Go to Courses
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
          <div className="lg:max-w-[50rem] lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={banner}
            ></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
