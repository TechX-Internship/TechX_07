import Image from "next/image"
import Link from "next/link"
import Button from "./Button"



const Header = () => {
    return (
        <header className="w-full  p-7">
            <div className="m-auto container flex justify-between items-center">
                <div className="logo">
                    <Image src={'/logo.png'} width={100} height={100} alt="no"></Image>
                </div>
                <ul className="menu flex items-center gap-7 text-black">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/'}>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Services</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Nurses To UK</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Current vacancies</Link>
                    </li>
                    <li>
                    <Link href={'/'}>Contact</Link>
                    </li>
                </ul>
                <Button title="book appointment"/>
            </div>
        </header>
    )
}

export default Header