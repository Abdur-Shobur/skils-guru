import React from 'react'

function Heading({ text }) {
  return (
    <div>
      <h1 className="text-2xl md:text-6xl text-blue-600 font-semibold text-center">
        {text}
      </h1>
    </div>
  )
}

export default Heading
