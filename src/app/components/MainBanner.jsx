import Button from "@/components/Button"
import Image from "next/image"

const MainBanner = () => {
    return (
        <section className="main-banner w-full bg-red-300">
            <div className="container flex items-center justify-between m-auto">
                <div className="w-6/12">
                    <p className="para-title color-secondary ml-10 mb-4 text-lg relative">Healthcare</p>
                    <h1 className="color-dark text-5xl mb-6 font-bold">Join a Hospital that reminds you why you become a nurse</h1>
                    <h6 className="color-extraLight text-xl mb-6">Clinics play a crucial role in providing accessible and timely healthcare services to patients in the community.</h6>
                    <div className="flex items-center">
                        <Button title='Book an Appointment' hasIcon={true} />
                        <div className="play-icon flex items-center ml-10">
                            <button className="rounded-full h-10 w-10 bg-primary text-white hover:bg-white hover:text-red-600 hover:border hover:border-red-600 transition-all duration-200 text-lg">
                                <i class="ri-play-fill"></i>
                            </button>
                            <p className="ml-5 text-lg font-semibold">Watch videos</p>
                        </div>
                    </div>
                    <p className="color-black mt-6">Have Question? <span className="color-secondary cursor-pointer">Please contact us</span></p>
                </div>
                <div className="w-6/12">
                    <Image src="/doc-lady.png" width={100} height={100} alt="no" quality={100} layout="responsive"></Image>
                </div>
            </div>
        </section>
    )
}

export default MainBanner 