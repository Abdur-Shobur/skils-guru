import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Heading from '../../component/Utility/Heading'
import SuccessCard from '../../component/Utility/SuccessCard'
import {
  AiOutlineIssuesClose,
  AiFillDollarCircle,
  AiFillFileText,
  AiFillTablet,
} from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
function Success() {
  const [success, setsuccess] = useState([])
  const icons = [
    AiOutlineIssuesClose,
    AiFillDollarCircle,
    AiFillTablet,
    FaUsers,
  ]
  useEffect(() => {
    fetch('https://backend-xi-two.vercel.app/success-story')
      .then((res) => res.json())
      .then((data) => setsuccess(data))
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <Heading text={'We Create Success'} />
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          {success.map((e) => (
            <SuccessCard result={e} key={e.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Success
