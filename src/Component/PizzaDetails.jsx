import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import PageNavigation from './PageNavigation';

const PizzaDetails = () => {

  return (
    <div>
      <>
        <div className="pt-14">
          <div className="mx-auto my-auto py-[20vh] container  px-10 sm:px-8 md:px-6 lg:px-10">
            <PageNavigation title="Margherita" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
              {/* product Images  */}
              <div className=" bg-gray-50/[.04] border rounded p-4">
                <img src="/images/margherita.jpg" className='h-96' />
              </div>

              <div className="border  rounded p-4 text-black">
                <div className="text-2xl mb-2 font-semibold text-blue-900">
                  Margherita
                </div>

                <p className="font-semibold  mb-2">price : 399</p>

                <p className="font-semibold  mb-2">catagory : veg</p>
                <p className="font-semibold  mb-2">Classic delight with 100% real mozzarella cheese</p>

                <div className="border-b-2 border-gray-100 pb-4">
                  <button className="bg-gradient-to-r lowercase from-secondary to-primary btn glass text-white hover:!bg-secondary w-full">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default PizzaDetails