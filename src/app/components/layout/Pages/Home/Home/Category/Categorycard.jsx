import { icon } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

export const Categorycard = ({ icon, title, description }) => {
  return (
   <div className="bg-[#FAFBEC] rounded-xl w-48 p-4 flex flex-col items-center shadow">
      <div className="mb-2">{icon}</div>
      <h2 className="font-semibold text-lg text-center">{title}</h2>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  )
}
