import Link from "next/link"
import Image from "next/image";
import Navitems from "./Navitems";
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href='/'>
         <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={46}
                        height={44}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                 <Navitems/>
                <p>Signin</p>
            </div>
    </nav>
  )
}

export default Navbar