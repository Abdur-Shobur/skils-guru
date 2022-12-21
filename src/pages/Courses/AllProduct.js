import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Product from '../../component/Utility/Product'
import { UseCourse } from '../../contextApi/UseCourses'

function AllProduct() {
  const { courses } = useContext(UseCourse)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col justify-center items-center xl:flex-row xl:items-start">
            <div className="w-80">
              <h1 className="text-3xl">All courses List</h1>
              {courses.map((e, id) => (
                <Link
                  key={id}
                  to={`${e.id}`}
                  className="block mt-5 bg-blue-300 px-3 py-2 mr-6 text-xl shadow-md hover:shadow-sm transition-all hover:bg-blue-400 hover:text-white"
                >
                  {e.name}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ">
              {courses.map((e) => (
                <Product product={e} key={e.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AllProduct
