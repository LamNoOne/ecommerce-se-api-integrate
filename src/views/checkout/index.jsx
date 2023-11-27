import React from 'react'
import Form from './Form'
const CheckOut = () => {
  return (
    <section className='my-16'>
        <h1 className='text-4xl leading-[30px] mb-12'>Billing Details</h1>
        <div className='checkout-container flex'>
            <div className='form-container w-full'>
                <Form />
            </div>
        </div>
    </section>
  )
}

export default CheckOut