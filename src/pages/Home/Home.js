import React from 'react'
import About from './About'
import Banner from './Banner'
import TargetMarketPlace from './TargetMarketPlace'
import PopularCoureses from './PopularCoureses'
import Success from './Success'
import StudentsReview from './StudentsReview'
import UseTittle from '../../contextApi/UseTittle'

function Home() {
  UseTittle('home')
  return (
    <>
      <Banner />
      <About />
      <TargetMarketPlace />
      <PopularCoureses />
      <Success />
      <StudentsReview />
    </>
  )
}

export default Home
