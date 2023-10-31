import DoctorCard from "./Cards/DoctorCard";
import LocationCard from "./Cards/LocationCard";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

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
        name: 'City Center Hospital',
        location: 'Pune'
    },
    {
        img: '/Assets/HomepageHos4.png',
        name: 'NMIMS',
        location: 'Mumbai'
    },
];

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
];

const DoctorCardDetails = [
    {
        img: '/Assets/DoctorMrinal.png',
        name: 'Mrinal Manjari',
        designation: 'MBBS, DGO, MD- OBS. & GYNAE',
        experience: '3+ Years',
        location: 'Bangalore'
    },
    {
        img: '/Assets/DoctorRachel.png',
        name: 'Rachel Green',
        designation: 'MBBS, DGO, MD- OBS. & GYNAE',
        experience: '3+ Years',
        location: 'Bangalore'
    },
    {
        img: '/Assets/DoctorMonica.png',
        name: 'Monica Geller',
        designation: 'MBBS, DGO, MD- OBS. & GYNAE',
        experience: '3+ Years',
        location: 'Bangalore'
    },
    {
        img: '/Assets/DoctorMrinal.png',
        name: 'Phoebe Buffay',
        designation: 'MBBS, DGO, MD- OBS. & GYNAE',
        experience: '3+ Years',
        location: 'Bangalore'
    },
];

const AboutUs = (props) => {

    const [dot1, setDot1] = useState(true);
    const [dot2, setDot2] = useState(false);
    const [dot3, setDot3] = useState(false);

    const [hospitalDotSelected, setHospitalDotSelected] = useState(1);
    const [selectedDoctorDot, setSelectedDoctorDot] = useState(1);
    const [selectedLabDot, setSelectedLabDot] = useState(1);
    const [certificateSelectedDot, setCertificateSelectedDot] = useState(1);

    return (
        <>
            <div className="hidden md:inline-flex flex justify-between items-center px-[100px] pt-[30px]">
                <div className="flex text-[#1A1C1F] flex-col w-[40%] relative">
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute left-[-30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[40px] absolute right-[30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute bottom-[-30px] right-[30px]" />
                    <div className="flex justify-start">
                        <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[120px] font-semibold">About Us</div>
                    </div>
                    <p className="text-[40px] leading-tight mt-[50px] font-medium">Dedicated to Your Lifelong Wellness</p>
                    <p className="text-[#5B6572] mt-[40px]">Healing you, one step at a time. Putting your health first. Compassionate care for all types of people</p>
                    <div className="flex space-x-3 items-center mt-[20px]">
                        <Link to={'/contact'}><div className="bg-[#E40443] text-center px-[6px] py-[5px] text-white rounded-[5px] w-[210px]">
                            <p className="font-semibold">Make An Appointment</p>
                        </div></Link>
                    </div>
                </div>
                <div className="lg: w-[60%] relative">
                    <img src="/Assets/HeroImageFinal.png" className="" alt="heroImage" />
                </div>
            </div>

            <div className="relative text-[#1A1C1F] md:hidden flex flex-col bg-[#F9F9F9] items-center px-[20px] py-[30px]">
                <div className="font-semibold text-[12px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[100px]">
                    <p>About Us</p>
                </div>
                <p className="text-center font-semibold text-[36px] mt-[10px]">Dedicated to Lifelong Wellness</p>
                <p className="text-[14px] text-center text-[#5B6572] mt-[10px]">Healing you, one step at a time. Putting your health first. Compassionate care for all types of people</p>
                <img src="/Assets/HeroImageMobile.png" alt="HeroImage" className="w-full mt-[10px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-10 top-[7%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[20%] w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[50%] w-[30px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-8 top-[70%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-10 w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-20 top-[15%] w-[20px]" />
                <div className="flex items-center justify-between space-x-5 mt-[20px]">
                    <Link to={'/contact'}><button className="text-white rounded-[5px] bg-[#E40443] px-[15px] py-[10px] text-[13px] font-semibold">Make an Appointment</button></Link>
                    <a href="tel: +123456789"><div className="flex items-center justify-center space-x-2 rounded-[5px] bg-[#FCE6EC] px-[15px] py-[10px]"><img src="/Assets/PinkCallIconMobile.png" alt="call" className="w-[20px]" /><p className="text-[#E40443] text-[13px] font-semibold">Urgent Call</p></div></a>
                </div>
            </div>

            <div className="hidden md:inline-flex w-full flex-col py-[80px] px-[100px] bg-[#F4F4F4] relative">
                <p className="text-center font-semibold text-[32px]">We Have The Top Level Of World Best Heart Surgery Specialist Expert</p>
                <p className="text-center font-semibold text-[32px]">Doctors. We are Used Latest Technology</p>

                <div className="flex justify-between space-x-10 mt-[50px]">
                    <div className="bg-white px-[15px] py-[10px] w-[23%]">
                        <p className="font-semibold text-[28px] text-center">580+</p>
                        <p className="mt-[5px] text-center">Heart Inspection</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[23%]">
                        <p className="font-semibold text-[28px] text-center">420+</p>
                        <p className="mt-[5px] text-center">Heart Therapy</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[23%]">
                        <p className="font-semibold text-[28px] text-center">580+</p>
                        <p className="mt-[5px] text-center">Heart Solutions</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[23%]">
                        <p className="font-semibold text-[28px] text-center">580+</p>
                        <p className="mt-[5px] text-center">Heart Transplant</p>
                    </div>
                </div>

                <p className="text-center font-semibold text-[32px] mt-[50px]">Get Premium  Services Call Us!</p>

                <div className=" flex justify-center">
                    <a href="tel: +123456789" className="w-full flex justify-center"><div className="bg-[#E40443] text-white px-[15px] py-[10px] max-w-[300px] rounded-[10px] text-center font-semibold text-[28px] absolute bottom-[-30px] ">+1 234 567 890</div></a> 
                </div> 
            </div>

            <div className="md:hidden py-[30px] px-[20px] bg-[#F4F4F4] relative">
                <p className="text-center font-semibold text-[18px]">We Have The Top Level Of World Best Heart Surgery Specialist Expert Doctors. We are Used Latest Technology</p>

                <div className="flex flex-col justify-between items-center space-y-5 mt-[20px]">
                    <div className="bg-white px-[15px] py-[10px] w-[65%]">
                        <p className="font-semibold text-[28px] text-center">580+</p>
                        <p className="mt-[5px] text-center font-medium">Heart Inspection</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[65%]">
                        <p className="font-semibold text-[28px] text-center">420+</p>
                        <p className="mt-[5px] text-center font-medium">Heart Therapy</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[65%]">
                        <p className="font-semibold text-[28px] text-center">580+</p>
                        <p className="mt-[5px] text-center font-medium">Heart Solutions</p>
                    </div>
                    <div className="bg-white px-[15px] py-[10px] w-[65%]">
                        <p className="font-semibold text-[28px] text-center">580+</p>
                        <p className="mt-[5px] text-center font-medium">Heart Transplant</p>
                    </div>
                </div>
                <p className="text-center font-semibold text-[16px] mt-[30px] font-semibold">Get Premium  Services Call Us!</p>
                <div className="flex justify-center">
                    <a href="tel: +123456789" className="w-full flex justify-center"><div className="bg-[#E40443] text-white px-[15px] py-[10px] max-w-[300px] rounded-[10px] text-center font-semibold text-[14px] absolute bottom-[-20px] ">+1 234 567 890</div></a>
                </div>   
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px] mt-[50px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[180px] font-semibold text-[14px]">Our Hospitals</div>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">We’re Dedicated To your Well-Being, Always</div>
                <div className="flex justify-between space-x-5 mt-[40px]">
                    {
                        LocationCardDetails.map((card) => {
                            return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[0px]'>
                    {dot1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(true)
                        setDot2(false)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(true)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(true);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/hospitals'}><div className="flex justify-center mt-[40px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="md:hidden flex flex-col items-center py-[30px] px-[20px] mt-[50px]">
                <div className="font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[130px]">
                    <p>Our Hospitals</p>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">We’re Dedicated To your Well-Being, Always</div>
                <div className="flex justify-between space-x-5 mt-[40px]">
                    {
                        LocationCardDetails.map((card, index) => {
                            if(hospitalDotSelected === index+1)
                                return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[0px]'>
                    {hospitalDotSelected === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setHospitalDotSelected(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {hospitalDotSelected === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setHospitalDotSelected(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {hospitalDotSelected === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setHospitalDotSelected(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/hospitals'}><div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[130px] font-semibold text-[14px]">Our Doctors</div>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">We’re Dedicated To your Well-Being, Always</div>
                <div className="flex space-x-5 mt-[40px]">
                    {
                        DoctorCardDetails.map((card) => {
                            return <DoctorCard img={card.img} name={card.name} location={card.location} designation={card.designation} experience={card.experience} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[40px]'>
                    {dot1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(true)
                        setDot2(false)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(true)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(true);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/doctors'}><div className="flex justify-center mt-[40px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="md:hidden py-[30px] flex flex-col items-center px-[20px]">
                <div className="font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[130px]">
                    <p>Our Doctors</p>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">Find Hospitals for Your Medical Needs</div>
                <div className="flex space-x-5 mt-[40px]">
                    {
                        DoctorCardDetails.map((card, index) => {
                            if(selectedDoctorDot === index+1)
                                return <DoctorCard img={card.img} name={card.name} location={card.location} designation={card.designation} experience={card.experience} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[40px]'>
                    {selectedDoctorDot === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedDoctorDot(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedDoctorDot === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedDoctorDot(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedDoctorDot === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedDoctorDot(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/doctors'}><div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[14px]">Our Labs</div>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">We’re Dedicated To your Well-Being, Always</div>
                <div className="flex space-x-5 justify-between mt-[40px]">
                    {
                        LabCardDetails.map((card) => {
                            return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[0px]'>
                    {dot1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(true)
                        setDot2(false)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(true)
                        setDot3(false);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1(false)
                        setDot2(false)
                        setDot3(true);
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/labs'}><div className="flex justify-center mt-[40px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="md:hidden flex flex-col items-center py-[30px] px-[20px]">
                <div className="font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[130px]">
                    <p>Our Labs</p>
                </div>
                <div className="text-[24px] font-medium text-center mt-[10px]">Convenient Access to Reliable Diagnostic Testing</div>
                <div className="flex space-x-5 justify-between mt-[40px]">
                    {
                        LabCardDetails.map((card, index) => {
                            if(index+1 === selectedLabDot)
                                return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[0px]'>
                    {selectedLabDot === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedLabDot(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedLabDot === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedLabDot(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedLabDot === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedLabDot(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/labs'}><div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="px-[20px] py-[30px] lg:py-[30px] bg-[#EEF0F3] lg:px-[100px]">
                <div className="flex flex-row items-center">
                    <p className="w-[100%] md:w-[40%] text-[13px] font-medium lg:font-medium md:text-[16px] font-medium">Trusted by 1000+ companies and patients</p> 
                    <div className="border-[1px] border-[#B8BFC7] w-[25%] lg:w-full h-[1px]"></div>
                </div>
                <div className="hidden md:inline-flex flex lg:justify-between w-full mt-[30px]">
                    <div className="flex flex-col">
                        <div className="text-[36px] text-[#E40443] font-medium">50+</div>
                        <div>Specialized Doctors</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[36px] text-[#E40443] font-medium">12k+</div>
                        <div>Happy patients</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[36px] text-[#E40443] font-medium">2k+</div>
                        <div>Total Employees</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[36px] text-[#E40443] font-medium">12k+</div>
                        <div>Happy patients</div>
                    </div>
                </div>
                <div className="md:hidden space-y-4 mt-[10px]">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="text-[36px] text-[#E40443] font-medium">50+</div>
                            <div>Specialized Doctors</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[36px] text-[#E40443] font-medium">12k+</div>
                            <div>Happy patients</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="text-[36px] text-[#E40443] font-medium">2k+</div>
                            <div>Total Employees</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[36px] text-[#E40443] font-medium">12k+</div>
                            <div>Happy patients</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:inline-flex flex-col items-center py-[40px] px-[100px]">
                <div className="flex justify-center mt-[40px]">
                    <p className="bg-[#F5F6F7] text-center px-[10px] py-[3px] rounded-[5px] text-[#1A1C1F] w-[190px] font-semibold text-[14px]">BIG ACHIEVEMENTS</p>
                </div>
                <p className="text-center text-[40px] mt-[30px] font-medium">We Achieved Success In</p>
                <img src="/Assets/Certificates.png" className="mt-[30px]" alt="certificates" />
            </div>

            <div className="md:hidden flex flex-col items-center py-[30px] px-[20px]">
                <div className="font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[160px]">
                    <p>BIG ACHIEVEMENTS</p>
                </div>
                <p className="text-center text-[24px] mt-[10px] font-medium">We have Achieved The Success of</p>
                <div className="flex flex-col items-center mt-[10px]">
                    {
                        certificateSelectedDot === 1 ? <img src="/Assets/Certificate1.png" alt="certificate" className="" /> : null
                    }
                    {
                        certificateSelectedDot === 2 ? <img src="/Assets/Certificate2.png" alt="certificate" className="" /> : null
                    }
                    {
                        certificateSelectedDot === 3 ? <img src="/Assets/Certificate3.png" alt="certificate" className="" /> : null
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {certificateSelectedDot === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setCertificateSelectedDot(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {certificateSelectedDot === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setCertificateSelectedDot(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {certificateSelectedDot === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setCertificateSelectedDot(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
            </div>

        </>
    );
}

export default AboutUs;