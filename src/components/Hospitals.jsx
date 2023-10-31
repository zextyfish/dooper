import LocationCard from "./Cards/LocationCard";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const LocationCardDetails = [
    {
        img: '/Assets/HomepageHos1.png',
        name: 'Bethany',
        location: 'Bangalore'
    },
    {
        img: '/Assets/HomepageHos2.png',
        name: 'AIIMS',
        location: 'Delhi'
    },
    {
        img: '/Assets/HomepageHos3.png',
        name: 'City Hospital',
        location: 'Pune'
    },
    {
        img: '/Assets/HomepageHos4.png',
        name: 'NMIMS',
        location: 'Mumbai'
    },
    {
        img: '/Assets/HomepageHos1.png',
        name: 'Bethany',
        location: 'Bangalore'
    },
    {
        img: '/Assets/HomepageHos2.png',
        name: 'AIIMS',
        location: 'Delhi'
    },
    {
        img: '/Assets/HomepageHos3.png',
        name: 'City Hospital',
        location: 'Pune'
    },
    {
        img: '/Assets/HomepageHos4.png',
        name: 'NMIMS',
        location: 'Mumbai'
    },
    {
        img: '/Assets/HomepageHos1.png',
        name: 'Bethany',
        location: 'Bangalore'
    },
    {
        img: '/Assets/HomepageHos2.png',
        name: 'AIIMS',
        location: 'Delhi'
    },
    {
        img: '/Assets/HomepageHos3.png',
        name: 'City Hospital',
        location: 'Pune'
    },
    {
        img: '/Assets/HomepageHos4.png',
        name: 'NMIMS',
        location: 'Mumbai'
    },
    {
        img: '/Assets/HomepageHos1.png',
        name: 'Bethany',
        location: 'Bangalore'
    },
    {
        img: '/Assets/HomepageHos2.png',
        name: 'AIIMS',
        location: 'Delhi'
    },
    {
        img: '/Assets/HomepageHos3.png',
        name: 'City Hospital',
        location: 'Pune'
    },
    {
        img: '/Assets/HomepageHos4.png',
        name: 'NMIMS',
        location: 'Mumbai'
    },
];

const Hospitals = (props) => {

    const [active, setActive] = useState(false);
    const [bar, setBar] = useState(6);

    return (
        <>
            <div className="hidden md:inline-flex flex-col w-full py-[40px] px-[100px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[140px] font-semibold text-[14px]">Our Hospitals</div>
                </div>
                <div className="text-[24px] text-center mt-[20px] font-medium">We’re Dedicated To your Well-Being, Always</div>

                <div className="grid grid-cols-4 flex justify-between mt-[40px]">
                    {
                        LocationCardDetails.map((card) => {
                            return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
            </div>

            <div className="md:hidden pt-[30px] px-[20px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[120px] font-semibold text-[12px]">Our Hospitals</div>
                </div>
                <div className="text-[24px] text-center mt-[10px] font-medium">We’re Dedicated To your Well-Being, Always</div>

                <div className="grid grid-cols-2 flex justify-between mt-[20px]">
                    {
                        LocationCardDetails.map((card, index) => {
                            if(index+1 <= bar)
                                return <div className="px-[5px]"><LocationCard img={card.img} name={card.name} location={card.location} /></div>
                        })
                    }
                </div>
            </div>

            {
                !active ? (
                <div className="w-full flex justify-center hidden lg:inline-flex flex-col items-center">
                    <button className="text-white font-medium bg-[#E40443] rounded-[10px] px-[15px] py-[5px]" onClick={() => setActive(true)}>Load More</button>
                </div> ): null
            }
            {
                !active ? (
                <div className="flex justify-center mb-[0px] md:hidden">
                    <button className="text-white font-medium bg-[#E40443] text-[10px] rounded-[5px] px-[15px] py-[7px]" onClick={() => {
                        setActive(true)
                        setBar(LocationCardDetails.length + 1)
                    }}>Load More</button>
                </div> ): null
            }

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

export default Hospitals;