import React from "react"

const LanguageDropDown = ({ onChange }) => {
  return (
    <select className="p-2 bg-gray-400 text-black absolute top-0 right-0 px-5" onChange={onChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="ger">German</option>
      <option value="hi">Hindi</option>
    </select>
  )
}

export default LanguageDropDown
