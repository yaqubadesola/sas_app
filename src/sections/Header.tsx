import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white">
        <div className="inline-flex items-center text-sm gap-3">
          <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} height={40} width={40} alt={""} />
            <MenuIcon className="w-5 h-5 md:hidden" />
            <nav className="hidden  gap-6 md:flex text-black/60 items-center">
              <a href="#">About</a> 
              <a href="#">Features</a>
              <a href="#">Customer</a> 
              <a href="#">Updates</a>
              <a href="#">Contact</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tighter">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
