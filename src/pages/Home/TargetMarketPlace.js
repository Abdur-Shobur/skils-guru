import React from 'react'
import Heading from '../../component/Utility/Heading'
import fiverr from '../../assets/images/marketplace/fiverr.png'
import frelancer from '../../assets/images/marketplace/freelancer.png'
import peopleper from '../../assets/images/marketplace/people-per.png'
import inded from '../../assets/images/marketplace/inded.png'
import upwork from '../../assets/images/marketplace/upwork.png'
function TargetMarketPlace() {
  const marketplaceimg = [fiverr, frelancer, peopleper, inded, upwork]
  return (
    <div className="container mx-auto py-10">
      <Heading text={'Target Marketplaces'} />
      <div className="flex justify-center gap-3 items-center mt-10 flex-wrap">
        {marketplaceimg.map((e, id) => (
          <div
            key={id}
            className="border items-stretch self-stretch w-60 shadow-lg rounded-lg flex justify-center hover:shadow-sm transition-all"
          >
            <img
              src={e}
              className="items-stretch  object-contain w-full px-3"
              alt=""
            ></img>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TargetMarketPlace
