import React from 'react'
import { useContext } from 'react'
import Heading from '../../component/Utility/Heading'
import Product from '../../component/Utility/Product'
import { UseCourse } from '../../contextApi/UseCourses'

function PopularCoureses() {
  const { courses } = useContext(UseCourse)
  return (
    <div className="container mx-auto mt-10">
      <Heading text={'Our Popular Online & Offline Courses'} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {courses.map((e) => (
          <Product product={e} key={e.id} />
        ))}
      </div>
    </div>
  )
}

export default PopularCoureses
