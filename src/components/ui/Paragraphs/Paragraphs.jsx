import React from 'react'

const Paragraphs = (text) => {
  return (
    <div>
        <p className="text-base font-semibold text-justify p-3  ">{text.content}</p>
    </div>
  )
}

export default Paragraphs