import Header from "@/components/Header";
import MainBanner from "./components/MainBanner";
import About from "@/components/About";
import Service from "@/components/Service";
import York from "./components/York";

export default function Home() {

    return (
        <> 
            <Header />
            <MainBanner />    
            <About />
           <Service />
           <York />
           
            {/* <h1>Hello</h1> */}
        </>    
    ) 
}

