import React, { useEffect } from 'react'
import { useState } from 'react'
import Heading from '../../component/Utility/Heading'
import StudentReviewCard from '../../component/Utility/StudentReviewCard'

function StudentsReview() {
  const [studentReview, setStudentReview] = useState([])
  useEffect(() => {
    fetch('https://backend-xi-two.vercel.app/student-review')
      .then((res) => res.json())
      .then((data) => setStudentReview(data))
  }, [])
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Heading text={'What our Student Says?'} />
          <div className="flex flex-wrap -m-4 mt-10">
            {studentReview.map((e) => (
              <StudentReviewCard key={e.id} reviews={e} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentsReview
