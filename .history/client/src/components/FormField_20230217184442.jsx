import React from 'react'

const FormField = ({ labelname, type, name, placeholder, value, handleChange, isSurpriseMe }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelname}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick="font-semibold "
          >
            Surprise Me
          </button>
        )}
      </div>
    </div>
  )
}

export default FormField