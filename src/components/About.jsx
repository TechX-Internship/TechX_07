import Image from "next/image"

const About = () => {
    return (
        <div className='about p-20'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="w-6/12 ">
                        <div className="p-5 text-center flex justify-center items-center">
                            <Image src="/about.png" width={100} height={100} alt="no" className="about-img " quality={100} layout="responsive"></Image>
                        </div>
                    </div>
                    <div className="w-6/12 p-3">
                        <h2 className='font-bold text-2xl p-2'>Who we are?</h2>
                        <p className='text-gray-400 text-lg p-2'>We are an India based Overseas Recruitment / Human Resource Solutions Provider catering to overseas Clients. We actively Search, Recruit and Screen candidates for employment, train them according to specific Client requirements and deploy them to their work locations. More importantly, when searching for the best candidates, we take attitude, personality, aptitude and flexibility to learn and adopt into special consideration.</p>
                        <p className='text-gray-400 text-lg p-2'> We employ effective methods for searching, recruiting and screening candidates according to the Client's specific needs
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="w-6/12">
                                <div className="flex items-center">
                                    <Image src="/Frame.jpg" width={80} height={80} alt="no" className="about1 m-2"></Image>
                                    <p className="font-bold ms-2 mt-2">Our Vision <br /><span className="text-gray-400 font-medium text-sm">YORK RECRUITMENT has <br />dedicated to uphold the principles</span></p>
                                </div>
                            </div>
                            <div className="w-6/12">
                                <div className="flex items-center ">
                                    <Image src="/frame2.jpg" width={80} height={80} alt="no" className="about1 m-2"></Image>
                                    <p className="font-bold ms-2 mt-2">Our Mission <br /><span className="text-gray-400 font-medium text-sm">We are specializing in recruiting <br />placing professionals in</span></p>
                                </div>
                            </div>
                        </div>
                        <button className="flex items-center text-white bg-red-600 p-2 rounded-md ms-4 mt-4"><span>Get Appointment</span><i class="ri-arrow-right-line ms-2"></i></button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About

