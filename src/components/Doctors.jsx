import DoctorsCard from "./Cards/DoctorsCard";
import {useState, useEffect} from 'react';

const SpecialitiesCardDetails = [
    {
        img: '/Assets/HomeBrain.png',
        tag: 'Psychologist'
    },
    {
        img: '/Assets/HomeLiver.png',
        tag: 'Hepatologist'
    },
    {
        img: '/Assets/HomeNose.png',
        tag: 'Nose specialist'
    },
    {
        img: '/Assets/HomePancreas.png',
        tag: 'Pancreatigist'
    },
    {
        img: '/Assets/HomeHeart.png',
        tag: 'Heart specialist'
    },
    {
        img: '/Assets/HomeEye.png',
        tag: 'Opthalmologist'
    },
    {
        img: '/Assets/HomeBrain.png',
        tag: 'Psychologist'
    },
    {
        img: '/Assets/HomeLiver.png',
        tag: 'Hepatologist'
    },
    {
        img: '/Assets/HomeNose.png',
        tag: 'Nose specialist'
    },
    {
        img: '/Assets/HomePancreas.png',
        tag: 'Pancreatigist'
    },
    {
        img: '/Assets/HomeHeart.png',
        tag: 'Heart specialist'
    },
    {
        img: '/Assets/HomeEye.png',
        tag: 'Opthalmologist'
    },
    {
        img: '/Assets/HomeBrain.png',
        tag: 'Psychologist'
    },
    {
        img: '/Assets/HomeLiver.png',
        tag: 'Hepatologist'
    },
    {
        img: '/Assets/HomeNose.png',
        tag: 'Nose specialist'
    },
    {
        img: '/Assets/HomePancreas.png',
        tag: 'Pancreatigist'
    },
    {
        img: '/Assets/HomeHeart.png',
        tag: 'Heart specialist'
    },
    {
        img: '/Assets/HomeEye.png',
        tag: 'Opthalmologist'
    },
    {
        img: '/Assets/HomeBrain.png',
        tag: 'Psychologist'
    },
    {
        img: '/Assets/HomeLiver.png',
        tag: 'Hepatologist'
    },
    {
        img: '/Assets/HomeNose.png',
        tag: 'Nose specialist'
    },
];

const Doctors = () => {

    const [active, setActive] = useState(false);

    return (
        <>
            <div className="hidden md:inline-flex flex-col w-full px-[100px] py-[40px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[230px] text-[14px] font-semibold">Common Health Concerns</div>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">We’re Dedicated To your Well-Being, Always</div>
                <div className="flex mt-[40px] grid grid-cols-6">
                    {
                        SpecialitiesCardDetails.map((card, idx) => {
                            if(!active)
                                return idx < 12 ? <DoctorsCard img={card.img} tag={card.tag} /> : null
                            else 
                                return <DoctorsCard img={card.img} tag={card.tag} />
                        })
                    }
                </div>

                {
                    !active ? (
                        <div className="flex justify-center ">
                            <button className="font-semibold text-[14px] text-white bg-[#E40443] rounded-[10px] px-[15px] py-[5px]" onClick={() => setActive(true)}>Load More</button>
                        </div>
                    ) : null
                }
            </div>

            <div className="md:hidden px-[20px] pt-[30px] pb-[10px]">
                <div className="flex justify-center ">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[240px] font-semibold text-[12px]">Common Health Concerns</p>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">We’re Dedicated To your Well-Being, Always</div>
                <div className="flex mt-[20px] grid grid-cols-3">
                    {
                        SpecialitiesCardDetails.map((card, idx) => {
                            if(!active)
                                return idx < 12 ? <DoctorsCard img={card.img} tag={card.tag} /> : null
                            else 
                                return <DoctorsCard img={card.img} tag={card.tag} />
                        })
                    }
                </div>

                {
                    !active ? (
                        <div className="flex justify-center ">
                            <button className="font-semibold text-[12px] text-white bg-[#E40443] rounded-[5px] px-[15px] py-[5px]" onClick={() => setActive(true)}>Load More</button>
                        </div>
                    ) : null
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

export default Doctors;