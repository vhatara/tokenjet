import React from 'react'
import './ChooseBox.css'

const ChooseBox = ({iconName, chooseTitle, chooseDesc}) => {
  return (
    <div className='choose-box'>
      <div className='mt-3'>
        <i class={iconName} ></i>
        </div>
        <div>
          <h4 className='text-uppercase'>{chooseTitle}</h4>
          <p>{chooseDesc}</p>
        </div>
    </div>
  )
}

export default ChooseBox