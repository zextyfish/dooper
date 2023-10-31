import { Link, useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';

const Header = (props) => {

    const location = useLocation();
    const path = location.pathname;

    const activeClass = "text-[#1A1C1F] font-medium";
    const inactiveClass = "text-[#8D98A4]";

    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <div className="hidden md:inline-flex w-full px-[100px] py-[25px] border-b-[1px] border-b-[#E3E6E8] z-10 flex flex-row items-center justify-between ">
                <div className=" w-[30%]">
                    <Link to={'/'}>
                        <img src="/Assets/Logo.png" className="w-[150px]" />
                    </Link>
                </div>
                <div className=" flex w-[70%] justify-between space-x-3 items-center">
                    <Link to={"/"}><div className={path === '/' ? activeClass : inactiveClass}>Home</div></Link>
                    <Link to={"/urgentcare"}><div className={path === '/urgentcare' ? activeClass : inactiveClass}>Urgent Care</div></Link>
                    <Link to={"/labs"}><div className={path === '/labs' ? activeClass : inactiveClass}>Lab Tests</div></Link>
                    <Link to={"/"}><div className={path === '/how' ? activeClass : inactiveClass}>How it Works</div></Link>
                    <Link to={"/about"}><div className={path === '/about' ? activeClass : inactiveClass}>About Us</div></Link>
                    <Link to={"/contact"}><div className={path === '/contact' ? activeClass : inactiveClass}>Contact Us</div></Link>
                    <Link to={"/"}><div className={path === '/join' ? activeClass : inactiveClass}>Join Us</div></Link>
                    <Link to={'/'}><div className="px-[25px] py-[8px] rounded-[5px] bg-[#FCE6EC]">
                        <button className="text-[#E40443] font-semibold">Get Started</button>
                    </div></Link>
                </div>
            </div>


            <div className="md:hidden flex justify-between items-center py-[20px] px-[25px] border-b-[1px] border-b-[#B8BFC7]">
                <img src="/Assets/DooperLogoMobile.png" alt="logo" className="w-[130px]" />
                <img onClick ={() => setDropdown(true)} src="/Assets/SidebarLogo.png" alt="sidebar" className="w-[40px]" />
            </div>
            {
                dropdown ? (
                    <div className="absolute top-0 right-0 bottom-0 z-index-class h-[100vh] w-[70vw] bg-white py-[20px]">
                        <div onClick={() => setDropdown(false)} className="flex items-center justify-center w-full border-b-[1px] px-[40px] pb-[20px] border-b-[#DBDADE] space-x-4">
                            <img src="/Assets/DropdownBack.png" alt="arrow" className="w-[40px]" />
                            <Link to={'/'}><button className="min-w-[170px] text-white text-[12px] bg-[#E40443] text-center px-[20px] py-[15px] rounded-[8px] font-semibold">Get Started</button></Link>
                        </div>
                        <Link to={'/'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                            <img src="/Assets/DropdownHome.png" className="w-[25px]" alt="icon" />
                            <p className="text-[18px] text-[#4B465C]">Home</p>
                        </div></Link>
                        <Link to={'/urgentcare'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                            <img src="/Assets/DropdownUrgent.png" className="w-[25px]" alt="icon" />
                            <p className="text-[18px] text-[#4B465C]">Urgent Care</p>
                        </div></Link>
                        <Link to={'/labs'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                            <img src="/Assets/DropdownLab.png" className="w-[25px]" alt="icon" />
                            <p className="text-[18px] text-[#4B465C]">Lab Tests</p>
                        </div></Link>
                        <Link to={'/hospitals'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                            <img src="/Assets/DropdownHealth.png" className="w-[25px]" alt="icon" />
                            <p className="text-[18px] text-[#4B465C]">Health Concerns</p>
                        </div></Link>
                        <Link to={'/'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                            <img src="/Assets/DropdownHow.png" className="w-[25px]" alt="icon" />
                            <p className="text-[18px] text-[#4B465C]">How it works</p>
                        </div></Link>
                        <Link to={'/about'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                            <img src="/Assets/DropdownAbout.png" className="w-[25px]" alt="icon" />
                            <p className="text-[18px] text-[#4B465C]">About us</p>
                        </div></Link>
                        <Link to={'/contact'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                            <img src="/Assets/DropdownContact.png" className="w-[25px]" alt="icon" />
                            <p className="text-[18px] text-[#4B465C]">Contact us</p>
                        </div></Link>
                        <Link to={'/'}><div onClick={() => setDropdown(false)} className="flex items-center justify-start w-full border-b-[1px] px-[40px] py-[10px] border-b-[#DBDADE] space-x-4">
                            <img src="/Assets/DropdownJoin.png" className="w-[25px]" alt="icon" />
                            <p className="text-[18px] text-[#4B465C]">Join us</p>
                        </div></Link>
                    </div>
                ) :null
            }
        </>
    );
}

export default Header;