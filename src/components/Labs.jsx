import LocationCard from "./Cards/LocationCard";
import LabPackages from "../Database/LabPackagesData";
import PackageCard from "./Cards/PackageCard";
import IndividualTests from '../Database/IndividualTests';
import IndividualTestCard from './Cards/IndividualTestCard';
import RadiologyTests from '../Database/RadiologyTests';
import RadiologyTestCard from "./Cards/RadiologyTestCard";
import {useState, useEffect} from 'react';

const LabCardDetails = [
    {
        img: '/Assets/HomepageHos1.png',
        name: 'Clinical',
        location: 'Bangalore'
    },
    {
        img: '/Assets/HomepageHos2.png',
        name: 'Microbiology',
        location: 'Delhi'
    },
    {
        img: '/Assets/HomepageHos3.png',
        name: 'Haematology',
        location: 'Pune'
    },
    {
        img: '/Assets/HomepageHos4.png',
        name: 'Orthopedic',
        location: 'Mumbai'
    },
    {
        img: '/Assets/HomepageHos1.png',
        name: 'Clinical',
        location: 'Bangalore'
    },
    {
        img: '/Assets/HomepageHos2.png',
        name: 'Microbiology',
        location: 'Delhi'
    },
    {
        img: '/Assets/HomepageHos3.png',
        name: 'Haematology',
        location: 'Pune'
    },
    {
        img: '/Assets/HomepageHos4.png',
        name: 'Orthopedic',
        location: 'Mumbai'
    },
];

const Labs = (props) => {

    const [viewPackages, setViewPackages] = useState(false);
    const [viewIndividual, setViewIndividual] = useState(false);
    const [viewRadiology, setViewRadiology] = useState(false);

    return (
        <>
            <div className="hidden md:flex flex justify-between items-center px-[100px] pt-[30px]">
                <div className="flex text-[#1A1C1F] flex-col w-[40%] relative">
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute left-[-30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[40px] absolute right-[30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute bottom-[-30px] right-[30px]" />
                    <div className="flex justify-start">
                        <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[130px] font-semibold text-[14px]">Lab Tests</div>
                    </div>
                    <p className="text-[40px] leading-tight mt-[30px] font-medium">Comprehensive Lab Test Services</p>
                    <p className="text-[#5B6572] mt-[40px]">Get Accurate Results for Your Health</p>
                    <div className="flex space-x-3 items-center mt-[30px]">
                        <div className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[100px]">
                            <p className="text-[14px] font-semibold">Book Now</p>
                        </div> 
                    </div>
                </div>
                <div className="lg: w-[60%] relative">
                    <img src="/Assets/HeroImageFinal.png" className="" alt="heroImage" />
                </div>
            </div>

            <div className="relative text-[#1A1C1F] md:hidden flex flex-col bg-white items-center px-[20px] py-[30px]">
                <div className="flex w-full justify-start">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[90px] font-semibold text-[12px]">Lab Tests</p>
                </div>
                <p className="text-start font-medium text-[24px] mt-[10px]">Comprehensive Lab Test services</p>
                <p className="text-[12px] w-full text-[#5B6572] mt-[10px]">Get accurate Test Results for your Health</p>
                <img src="/Assets/HeroImageMobile.png" alt="HeroImage" className="w-full mt-[10px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-10 top-[7%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[20%] w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[50%] w-[30px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-8 top-[70%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-10 w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-20 top-[15%] w-[20px]" />
                <div className="flex items-center justify-between space-x-5 mt-[20px]">
                    <button className="text-white rounded-[5px] bg-[#E40443] px-[20px] py-[10px] text-[12px] font-semibold">Book Now</button>
                </div>
            </div>

            <div className="md:hidden flex justify-center w-full relative">
                <div className="w-[60%] relative">
                    <input type="text" placeholder="Search for Lab Test" className="text-[12px] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                    <img src="/Assets/SearchIcon.png" className="absolute right-[10px] bottom-[2px] w-[25px] h-[25px]" alt="icon" />
                </div>
            </div>

            <div className="w-full hidden md:inline-flex flex-col px-[100px] pb-[40px] mt-[50px]">
                <div className="flex justify-between items-end">
                    <p className="text-[30px] text-[#1A1C1F] font-semibold">Packages</p>
                    <div className="flex justify-end w-full relative">
                        <input type="text" placeholder="Search for Lab Test" className="border-[1px] border-[#DBDADE] rounded-[5px] w-[300px] px-[10px] py-[5px] mr-[20px]" />
                        <img src="/Assets/SearchIcon.png" className="absolute right-[30px] bottom-[5px] w-[25px] h-[25px]" alt="icon" />
                    </div>
                </div>
                
                <div className="grid grid-cols-3 mt-[30px]">
                    {
                        LabPackages.map((data, idx) => {
                            return (!viewPackages ? (idx < 6 ? <PackageCard data = {data} /> : null) : <PackageCard data = {data} />)
                        })
                    }
                </div>

                {
                    !viewPackages ? 
                    <div className="flex justify-center mt-[20px]">
                        <button onClick={() => setViewPackages(true)} className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold text-[14px]">View All</button>
                    </div> : null
                }
            </div>

            <div className="md:hidden px-[20px] pb-[30px] mt-[30px]">
                <div className="flex justify-between items-end">
                    <p className="text-[18px] text-[#1A1C1F] font-medium">Packages</p>
                </div>
                
                <div className="grid grid-cols-2 mt-[20px]">
                    {
                        LabPackages.map((data, idx) => {
                            return (!viewPackages ? (idx < 6 ? <PackageCard data = {data} /> : null) : <PackageCard data = {data} />)
                        })
                    }
                </div>

                {
                    !viewPackages ? 
                    <div className="flex justify-center mt-[10px]">
                        <button onClick={() => setViewPackages(true)} className="bg-[#E40443] text-center px-[6px] py-[6px] text-white rounded-[5px] w-[80px] font-semibold text-[10px]">View All</button>
                    </div> : null
                }
            </div>

            <div className="hidden md:inline-flex w-full flex-col px-[100px] py-[40px]">
                <p className="text-[30px] text-[#1A1C1F] font-semibold">Individual Tests</p>
                <div className="grid grid-cols-3 mt-[30px]">
                    {
                        IndividualTests.map((data, idx) => {
                            return (!viewIndividual ? (idx < 6 ? <IndividualTestCard data = {data} /> : null) : <IndividualTestCard data = {data} />)
                        })
                    }
                </div>
                {
                    !viewIndividual ? 
                    <div className="flex justify-center mt-[20px]">
                        <button onClick={() => setViewIndividual(true)} className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold text-[14px]">View All</button>
                    </div> : null
                }
            </div>

            <div className="md:hidden px-[20px] pb-[30px] mt-[30px]">
                <div className="flex justify-between items-end">
                    <p className="text-[18px] text-[#1A1C1F] font-medium">Individual Tests</p>
                </div>
                
                <div className="grid grid-cols-2 mt-[20px]">
                    {
                        IndividualTests.map((data, idx) => {
                            return (!viewIndividual ? (idx < 6 ? <IndividualTestCard data = {data} /> : null) : <IndividualTestCard data = {data} />)
                        })
                    }
                </div>

                {
                    !viewIndividual ? 
                    <div className="flex justify-center mt-[10px]">
                        <button onClick={() => setViewIndividual(true)} className="bg-[#E40443] text-center px-[6px] py-[6px] text-white rounded-[5px] w-[80px] font-semibold text-[10px]">View All</button>
                    </div> : null
                }
            </div>

            <div className="hidden md:inline-flex flex-col px-[100px] py-[40px]">
                <p className="text-[30px] text-[#1A1C1F] font-semibold">Radiology Tests</p>
                <div className="grid grid-cols-3 mt-[30px]">
                    {
                        RadiologyTests.map((data, idx) => {
                            return (!viewIndividual ? (idx < 6 ? <RadiologyTestCard data = {data} /> : null) : <RadiologyTestCard data = {data} />)
                        })
                    }
                </div>
                {
                    !viewRadiology ? 
                    <div className="flex justify-center mt-[20px]">
                        <button onClick={() => setViewRadiology(true)} className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold text-[14px]">View All</button>
                    </div> : null
                }
            </div>

            <div className="md:hidden px-[20px] mt-[30px]">
                <div className="flex justify-between items-end">
                    <p className="text-[18px] text-[#1A1C1F] font-medium">Radiology Tests</p>
                </div>
                
                <div className="grid grid-cols-2 mt-[20px]">
                    {
                        RadiologyTests.map((data, idx) => {
                            return (!viewIndividual ? (idx < 6 ? <RadiologyTestCard data = {data} /> : null) : <RadiologyTestCard data = {data} />)
                        })
                    }
                </div>

                {
                    !viewRadiology ? 
                    <div className="flex justify-center mt-[10px]">
                        <button onClick={() => setViewRadiology(true)} className="bg-[#E40443] text-center px-[6px] py-[6px] text-white rounded-[5px] w-[80px] font-semibold text-[10px]">View All</button>
                    </div> : null
                }
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px]">
                <div className="flex flex-row items-center">
                    <p className="w-[40%] font-medium">Trusted by 1000+ companies and patients</p> 
                    <div className="border-[1px] border-[#B8BFC7] w-full h-[1px]"></div>
                </div>
                <div className="flex justify-between space-x-10 mt-[30px]">
                    <img src="/Assets/AboutUsBanner1.png" alt="banner" className='w-[17%]' />
                    <img src="/Assets/AboutUsBanner2.png" alt="banner" className='w-[17%]' />
                    <img src="/Assets/AboutUsBanner3.png" alt="banner" className='w-[17%]' />
                    <img src="/Assets/AboutUsBanner4.png" alt="banner" className='w-[17%]' />
                    <img src="/Assets/AboutUsBanner5.png" alt="banner" className='w-[17%]' />
                </div>
            </div>

            <div className="md:hidden py-[30px] px-[20px] bg-white mt-[0px]">
                <div className="flex flex-row items-center">
                    <p className="font-semibold text-[14px]">Trusted by 1000+ companies and patients</p> 
                </div>
                <div className="flex justify-between space-x-2 mt-[20px]">
                    <img src="/Assets/AboutUsBanner1.png" alt="banner" className='w-[33%]' />
                    <img src="/Assets/AboutUsBanner2.png" alt="banner" className='w-[33%]' />
                    <img src="/Assets/AboutUsBanner3.png" alt="banner" className='w-[33%]' />
                </div>
            </div>
        </>
    );
}

export default Labs;