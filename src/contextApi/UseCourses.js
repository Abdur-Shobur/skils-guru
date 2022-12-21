import React from 'react'
import { createContext } from 'react'
import { useEffect, useState } from 'react'
export const UseCourse = createContext()
function UseCourses({ children }) {
  const [courses, setcourses] = useState([])
  useEffect(() => {
    fetch('https://backend-xi-two.vercel.app/courses')
      .then((res) => res.json())
      .then((data) => setcourses(data))
  }, [])
  const value = {
    courses,
  }
  return <UseCourse.Provider value={value}>{children}</UseCourse.Provider>
}

export default UseCourses
