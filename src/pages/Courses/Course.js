import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Pdf from 'react-to-pdf'
import UseTittle from '../../contextApi/UseTittle'
const ref = React.createRef()

function Course() {
  UseTittle('courses')
  const loadData = useLoaderData()
  const {
    id,
    img,
    name,
    students,
    price,
    details,
    sortdetails,
    author,
    review,
    time,
    language,
    update_data,
  } = loadData
  // function printDiv(divName) {
  //   var printContents = document.getElementById(divName).innerHTML
  //   // var originalContents = document.body.innerHTML
  //   document.body.innerHTML = printContents
  //   window.print()
  //   // document.body.innerHTML = originalContents
  // }
  return (
    <>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <div className="text-center mt-3">
            <button
              onClick={toPdf}
              className="border px-3 py-1 text-white rounded-md  bg-blue-700"
            >
              Generate Pdf
            </button>
          </div>
        )}
      </Pdf>
      {/* <input
        type="button"
        onClick={() => printDiv('printableArea')}
        value="print a div!"
      /> */}
      <section
        id="printableArea"
        ref={ref}
        className="text-gray-600 body-font overflow-hidden"
      >
        <div className="container px-5 pb-14  pt-10 mx-auto">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
            <span className="underline">About</span> {name} Courses
          </h1>

          <h1 className="text-gray-900 text-lg mb-5 md:w-1/2">{sortdetails}</h1>

          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded"
              src={img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {name}
              </h1>
              <h1 className="text-lg text-green-500">
                Total Students: {students}+
              </h1>

              <p className="leading-relaxed text-lg mt-3">{details}</p>
              <div className="mt-5">
                <h1 className="text-lg text-red-400">
                  Publish date: {update_data}
                </h1>
                <h1 className="text-lg text-blue-400">Language: {language}</h1>
                <h1 className="text-xl font-semibold">Author Name: {author}</h1>
                <h1 className="text-xl font-semibold text-yellow-400">
                  Review: {review} *
                </h1>
                <h1 className="text-xl font-semibold">
                  Duration : {time} hour
                </h1>
              </div>

              <div className="flex mt-10">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {price} Tk
                </span>
                <Link
                  to={`/checkout/${id}`}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Enrol Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Course
