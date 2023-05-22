import React from "react"

const LanguageDropDown = ({ onChange }) => {
  return (
    <select className="p-4 bg-blue-700 text-white absolute top-0" onChange={onChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="ger">German</option>
      <option value="hi">Hindi</option>
    </select>
  )
}

export default LanguageDropDown
