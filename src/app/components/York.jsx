import React from 'react'
import Image from 'next/image'

const York = () => {
  return (
    <div className='recruitment m-8'>
        <h2 className='font-bold text-lg text-center'>York Recruitment - Healthcare & Technical</h2>
        <p className='text-gray-400 text-center mt-3 mb-6 text-md'>We are specializing in recruiting and placing professionals in Industries such as Healthcare & Hospitals , <br/>Oil & Petrochemical, Architecture, Electrical, Mechanical and Civil Projects, Automobiles, Building Services.</p>

        <div className="card ">
            <div className="flex justify-center items-center">
                <div className="box p-6 border border-black rounded-md">
                    <div className="flex items-center">
                    <Image src="/frame3.jpg" width={80} height={80} alt="no" className="about1 m-2"></Image>
                    <h3 className='font-bold text-xl ms-2'>Our Divisions</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default York