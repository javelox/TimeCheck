import React from 'react'

const Paragraphs = (text) => {
  return (
    <div>
        <p className="text-sm capitalize p-3 ">{text.content}</p>
    </div>
  )
}

export default Paragraphs