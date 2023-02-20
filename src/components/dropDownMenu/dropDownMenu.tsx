import React from 'react'
import { DropDownList } from './dropDownList'

type Show = {
  show :string
}

export const DropDownMenu = ({show} : Show) => {
  return (
    <div className={`fixed ${show} shadow-custom top-20 left-52 w-[50%] p-5 bg-white rounded-xl`}>
      <DropDownList/>
    </div>
  )
}

