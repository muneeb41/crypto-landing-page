import React from 'react'
import { paymentUrl } from '../../utils/const.js'

const RegisterBtn = () => {
  return (
    <div className='flex justify-center my-5'>
        <a href={paymentUrl} target='_blank'>
            <button className='bg-green-600 box-shadow-main font-bold hover-scale py-3 mx-3 text-xl text-white rounded-lg px-1 animate-move sm:px-3 sm:text-2xl'>Join The Workshop At Just Rs. 9/-</button>
        </a>
    </div>
  )
}

export default RegisterBtn