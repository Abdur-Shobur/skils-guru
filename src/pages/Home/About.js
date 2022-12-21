import React from 'react'
import Heading from '../../component/Utility/Heading'
import IconCard from '../../component/Utility/IconCard'
import about_img from '../../assets/images/about_img.jpg'

function About() {
  return (
    <div className="container mx-auto">
      <Heading text={'About Skils Guru'} />
      <div className="flex justify-between flex-col xl:flex-row items-center ">
        <div>
          <img src={about_img} alt="" />
        </div>
        <IconCard />
      </div>
    </div>
  )
}

export default About
