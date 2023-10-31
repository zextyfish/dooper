import React from "react";
import CommunityCards from "./Cards/CommunityCard";
import HomepageCard from "./Cards/HomepageCard";
import HomepageSpecialitiesCard from "./Cards/HomepageSpecialitiesCard";
import LocationCard from "./Cards/LocationCard";
import TestimonialCard from "./Cards/TestimonialCard";
import FAQContainer from "./Containers/FAQContainer";
import TestimonialContainer from './Containers/TestimonialContainer';
import Testimonials from "../Database/Testimonials";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SemiDonutGraph from "./Cards/SemiDonutGraph";

const val = 78;

const CardDetails = [
    {
        img: '/Assets/HomeCard1.png',
        tag: 'Telemedicine'
    },
    {
        img: '/Assets/HomeCard2.png',
        tag: 'Prescription Refills'
    },
    {
        img: '/Assets/HomeCard3.png',
        tag: 'Online Bookings'
    },
    {
        img: '/Assets/HomeCard4.png',
        tag: 'Remote Monitoring'
    },
];

const CommunityData = [
    {
        img: "/Assets/CommunityDHA.png",
        name: "DHA",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
        img: "/Assets/CommunityHospital.png",
        name: "Hospital",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
        img: "/Assets/CommunityDoctor.png",
        name: "Doctor",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
        img: "/Assets/CommunityPharma.png",
        name: "Pharma",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
        img: "/Assets/CommunityLab.png",
        name: "Lab",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
];

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
];

const HealthConcernsDetails = [
    {
        img: '/Assets/HomeBrain.png',
        tag: 'Periods Doubt or Pregnancy'
    },
    {
        img: '/Assets/HomeLiver.png',
        tag: 'Acne, Pimples or Skin issues'
    },
    {
        img: '/Assets/HomeNose.png',
        tag: 'Cold Cough or Fever'
    },
    {
        img: '/Assets/HomePancreas.png',
        tag: 'Depression or Anxiety'
    },
    {
        img: '/Assets/HomeHeart.png',
        tag: 'Child not feeling well'
    },
    {
        img: '/Assets/HomeEye.png',
        tag: 'Performance issues in bed'
    },
];

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

const FAQList = [
    {
        question: 'How to book your service?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'How do I find information about the hospitals location and contact details?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'How can I schedule an appointment with a doctor?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'What types of services or specialties does the hospital offer?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'How can I access my medical records or test results?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'What insurance plans does the hospital accept?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'How can I pay my medical bills or inquire about billing-related issues?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
];

const Home = (props) => {

    const [dot1, setDot1] = useState(true);
    const [dot2, setDot2] = useState(false);
    const [dot3, setDot3] = useState(false);
    
    const [dot1Solutions, setDot1Solutions] = useState(true);
    const [dot2Solutions, setDot2Solutions] = useState(false);
    const [dot3Solutions, setDot3Solutions] = useState(false);
    const [selectedCard, setSelectedCard] = useState(1);

    const [dot1Speciality, setDot1Speciality] = useState(true);
    const [dot2Speciality, setDot2Speciality] = useState(false);
    const [dot3Speciality, setDot3Speciality] = useState(false);
    const [selectedSection, setSelectedSection] = useState(1);

    const [dot1Health, setDot1Health] = useState(true);
    const [dot2Health, setDot2Health] = useState(false);
    const [dot3Health, setDot3Health] = useState(false);
    const [selectedSection2, setSelectedSection2] = useState(1);

    const [locationDotSelected, setLocationDotSelected] = useState(1);

    const [selectedTestimonialDot, setSelectedTestimonialDot] = useState(1);

    const [selectedCommunityDot, setSelectedCommunityDot] = useState(1);
    

    return (
        <div className="">
            <div className="hidden md:inline-flex flex justify-between items-center px-[100px] pt-[30px] bg-[#F4F4F4]">
                <div className="flex text-[#1A1C1F] flex-col space-y-8 w-[40%] relative">
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute left-[-30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[40px] absolute right-[30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute bottom-[-30px] right-[30px]" />
                    <p className="font-semibold">Your health is our priority</p>
                    <p className="text-[60px] font-semibold leading-tight w-[470px]">Dedicated to Your Well Wisher</p>
                    <p className="text-[#5B6572]">Healing you, one step at a time. Putting your health first. Compassionate care for all types of people</p>
                    <div className="flex space-x-3 items-center mt-[50px]">
                        <Link to={'/contact'}><div className="bg-[#E40443] text-center px-[6px] py-[7px] text-white rounded-[5px] w-[220px]">
                            <p className="font-semibold">Make An Appointment</p>
                        </div> </Link>
                        <a href="tel: 1234567890"><div className="px-[20px] py-[7px] rounded-[5px] bg-[#FCE6EC]  flex justify-center items-center space-x-2">
                            <img src="/Assets/PinkCallIcon.png" className="w-[18px]" alt="icon" />
                            <p className="text-[#E40443] font-semibold text-center">Urgent Call</p>
                        </div></a>
                    </div>
                </div>
                <div className="lg: w-[60%] relative">
                    <img src="/Assets/HeroImageFinal.png" className="" alt="heroImage" />
                    <div className="absolute top-[45%] left-[25%] w-[110px] flex items-center space-x-1 px-[10px] py-[9px] rounded-[5px] bg-white justify-between">
                        <img src="/Assets/VomitIcon.png" alt="icon" className="w-[22px]" />
                        <p className="font-semibold text-[14px]">Vomiting</p>
                    </div>
                    <div className="absolute bottom-[27%] left-[25%] w-[105px] flex items-center space-x-1 px-[10px] py-[9px] rounded-[5px] bg-white justify-between">
                        <img src="/Assets/DiarrheaIcon.png" alt="icon" className="w-[22px]" />
                        <p className="font-semibold text-[14px]">Diarrhea</p>
                    </div>
                    <div className="absolute top-[41%] right-[25%] w-[86px] flex items-center space-x-1 px-[10px] py-[9px] rounded-[5px] bg-white justify-between">
                        <img src="/Assets/FeverIcon.png" alt="icon" className="w-[22px]" />
                        <p className="font-semibold text-[14px]">Fever</p>
                    </div>
                    <div className="absolute bottom-[30%] right-[27%] w-[70px] flex items-center space-x-1 px-[10px] py-[9px] rounded-[5px] bg-white justify-between">
                        <img src="/Assets/FluIcon.png" alt="icon" className="w-[22px]" />
                        <p className="font-semibold text-[14px]">Flu</p>
                    </div>
                </div>
            </div>

            <div className="relative text-[#1A1C1F] md:hidden flex flex-col bg-[#F9F9F9] items-center px-[20px] py-[30px]">
                <p className="font-semibold text-[12px]">Your health is our priority</p>
                <p className="text-center font-semibold text-[36px] mt-[10px]">Dedicated to Your Well Wisher</p>
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

            <div className="px-[20px] py-[30px] lg:pt-[30px] lg:px-[100px] lg:py-[40px]">
                <div className="font-semibold flex justify-center text-center bg-[#F5F6F7] text-center px-[10px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[70px]">
                    <p className="text-center text-[13px] md:text-[16px] font-semibold">DHA</p>
                </div>
                <div className="py-[10px] ">
                    <h2 className=" text-[24px] font-medium lg:text-[35px]">Leading the way in medical excellence</h2>
                    <p className="pt-[10px] text-[13px] md:text-[16px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                </div>

                <div className="md:hidden">
                    <img src="/Assets/LeadingMobile.png" alt="leading" className="w-full" />
                </div>
                <div className="md:hidden text-[13px]">
                    <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                    <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="md:hidden">
                        <div className="flex mt-[10px] flex-row justify-between">
                            <div className="w-[50%] flex flex-col">
                                <div className="flex items-center">
                                    <img className="w-[20px]" src="/Assets/SupportIcon.png" alt="icon" />
                                    <p className="ml-[10px] text-[13px] font-medium">24/7 Doctor Support</p>
                                </div>
                                <div className="flex items-center mt-5">
                                    <img className="w-[20px]" src="/Assets/Doctor.png" alt="icon" />
                                    <p className="ml-[10px] text-[13px] font-medium">Certified Doctors</p>
                                </div>
                            </div>
                            <div className="w-[50%] flex flex-col ">
                                <div className="flex items-center">
                                    <img className="w-[20px]" src="/Assets/TechnologyIcon.png" alt="icon" />
                                    <p className="ml-[10px] text-[13px] font-medium">Modern Technology</p>
                                </div>
                                <div className="flex items-center mt-5">
                                    <img className="w-[20px]" src="/Assets/Appointment.png" alt="icon" />
                                    <p className="ml-[10px] text-[13px] font-medium">Instant Appointment</p>
                                </div>
                            </div>
                        </div>
                        <Link to={'/contact'}><div className="bg-[#E40443] text-[13px] text-center mt-[20px] px-[6px] py-[4px] flex justify-center text-white rounded-[5px] w-[120px]">
                            <p className="font-semibold">Book Service</p>
                        </div></Link>
                </div>

                <div className="hidden md:inline-flex flex flex-row items-center justify-between">
                    <div className="w-[40%]">
                        <img src="/Assets/WhatOurHDAProvides2.png"  />
                    </div>
                    <div className="w-[60%] pl-[50px]">
                        <div className="py-[10px] text-[13px] md:text-[16px]">
                            <p className="mt-[10px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <p className="mt-[10px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="flex mt-[10px] flex-row justify-between">
                            <div className="w-[50%] flex flex-col">
                                <div className="flex items-center">
                                    <img className="w-[20px]" src="/Assets/SupportIcon.png" alt="icon" />
                                    <p className="ml-[10px] font-medium">24/7 Doctor Support</p>
                                </div>
                                <div className="flex items-center mt-5">
                                    <img className="w-[20px]" src="/Assets/Doctor.png" alt="icon" />
                                    <p className="ml-[10px] font-medium">Certified Doctors</p>
                                </div>
                            </div>
                            <div className="w-[50%] flex flex-col ">
                                <div className="flex items-center">
                                    <img className="w-[20px]" src="/Assets/TechnologyIcon.png" alt="icon" />
                                    <p className="ml-[10px] font-medium">Modern Technology</p>
                                </div>
                                <div className="flex items-center mt-5">
                                    <img className="w-[20px]" src="/Assets/Appointment.png" alt="icon" />
                                    <p className="ml-[10px] font-medium">Instant Appointment</p>
                                </div>
                            </div>
                        </div>
                        <Link to={'/contact'}><div className="bg-[#E40443] text-center mt-[20px] px-[10px] py-[4px] text-white rounded-[5px] w-[130px]">
                            <p className="font-semibold">Book Service</p>
                        </div></Link>
                    </div>
                </div>
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

            <div className="hidden md:inline-flex flex flex-col py-[30px] px-[100px]">
                <div className="font-semibold bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[260px]">
                    Your health is our priority
                </div>
                <p className="text-[35px] mt-[10px] font-medium">Innovative Solutions For your Health Needs</p>
                <div className="flex flex-row justify-between mt-[40px]">
                    {
                        CardDetails.map((card, index) => {
                            return <HomepageCard img={card.img} tag={card.tag} selectedCard={selectedCard} />
                        })
                    }
                </div>
            </div>

            <div className="md:hidden py-[30px] px-[20px]">
                <div className="font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[200px]">
                    Your health is our priority
                </div>
                <p className="text-[24px] mt-[10px] font-medium font-medium">Innovative Solutions For your Health Needs</p>
                <div className="flex flex-row justify-center mt-[10px] px-[30px]">
                    {
                        CardDetails.map((card, index) => {
                            if(selectedCard === index )
                            return <HomepageCard img={card.img} tag={card.tag} selectedCard={selectedCard} index = {index} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {dot1Solutions ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1Solutions(true)
                        setDot2Solutions(false)
                        setDot3Solutions(false)
                        setSelectedCard(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2Solutions ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1Solutions(false)
                        setDot2Solutions(true)
                        setDot3Solutions(false)
                        setSelectedCard(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3Solutions ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1Solutions(false)
                        setDot2Solutions(false)
                        setDot3Solutions(true)
                        setSelectedCard(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
            </div>

            <div className="px-[20px] py-[30px] lg:py-[40px] lg:px-[100px] bg-[#EEF0F3] flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-12">
                <div className="hidden lg:inline-flex w-[50%]">
                    <img src="/Assets/HomepageDoctors.png" alt="doctorImage" />
                </div>
                <div className="lg:w-[50%]">
                    <div className="md:hidden rounded-[5px] px-[10px] py-[5px] bg-white text-black flex justify-center font-semibold text-[13px] w-[100px]">
                        <p>About Us</p>
                    </div>
                    <div className="hidden md:inline-flex flex justify-center font-semibold bg-[#F5F6F7] text-center px-[10px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[120px]">
                        <p>About Us</p>
                    </div>
                    <p className="text-[24px] md:text-[40px] mt-[10px] md:mt-[20px] font-medium md:w-[500px]">Together, We can achieve optimal health</p>
                    <p className="mt-[10px] text-[13px] md:text-[16px] md:mt-[20px]">Healing you, one step at a time. Putting your health first. Compassionate care for all types of people</p>

                    <Link to={'/about'}><div className="hidden md:inline-flex flex justify-center bg-[#E40443] text-center mt-[20px] px-[6px] py-[4px] text-white rounded-[5px] w-[200px]">
                        <p className="text-center font-semibold">Know more about us</p>
                    </div></Link>
                    <Link to={'/about'}><div className="md:hidden bg-[#E40443] text-[13px] text-center mt-[10px] px-[6px] py-[4px] flex justify-center text-white rounded-[5px] w-[160px]">
                        <p className="font-semibold">Know more about us</p>
                    </div></Link>
                </div>
                <div className="lg:hidden w-full mt-[10px] p-[10px]">
                    <img src="/Assets/HomepageDoctors.png" alt="doctorImage" />
                </div>
            </div>

            <div className="px-[20px] py-[30px] lg:py-[40px] lg:px-[100px] flex lg:flex-row flex-col justify-between items-center lg:space-x-12">
                <div className="lg:w-[50%]">
                    <div className="hidden lg:inline-flex font-semibold bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[240px]">
                        Your health is our priority
                    </div>
                    <div className="md:hidden font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[200px]">
                        Your health is our priority
                    </div>
                    <p className="text-[24px] font-medium mt-[10px] lg:text-[40px] lg:mt-[20px]">Together, We can achieve</p>
                    <p className="lg:mt-[20px] mt-[10px] text-[13px] lg:text-[16px]">Healing you, one step at a time. Putting your health first. Compassionate care for all types of people!. Healing you, one step at a time. Putting your health first. Compassionate care for all types of people!</p>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col">
                    <div className="flex grid grid-cols-3 ">
                        <SemiDonutGraph percentage={88} color={'#41B079'} text={"Patient Satisfaction Rate"} direction={'up'} className="ring" />
                        <SemiDonutGraph percentage={71} color={'#41B079'} text={"Patient Satisfaction Rate"} direction={'up'}/> 
                        <SemiDonutGraph percentage={68} color={'#41B079'} text={"Patient Satisfaction Rate"} direction={'up'}/>
                    </div>
                    <div className="flex grid grid-cols-3 mt-[-70px] lg:mt-[0px]">
                        <SemiDonutGraph percentage={54} color={'#F1614B'} text={"Patient Satisfaction Rate"} direction={'down'}/> 
                        <SemiDonutGraph percentage={36} color={'#F1614B'} text={"Patient Satisfaction Rate"} direction={'down'}/> 
                        <SemiDonutGraph percentage={21} color={'#F1614B'} text={"Patient Satisfaction Rate"} direction={'down'}/>
                    </div>
                </div>
            </div>

            <div className="hidden lg:inline-flex flex flex-col py-[40px] px-[100px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[5px] font-semibold rounded-[5px] text-[#1A1C1F] w-[100px] flex justify-center"><p className="text-center">Speciality</p></div>
                </div>
                <div className=" text-[40px] text-center mt-[10px] font-medium">Specialities</div>
                <div className="flex space-x-5 mt-[40px]">
                    {
                        SpecialitiesCardDetails.map((card) => {
                            return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
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
                <Link to={'/specialities'}><div className="flex justify-center mt-[40px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="md:hidden mt-[-60px] py-[30px] px-[20px] flex flex-col items-center">
                <div className="md:hidden font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[110px]">
                    <p>Speciality</p>
                </div>
                <div className=" text-[24px] text-center mt-[10px] font-medium">Specialities</div>
                <div className="flex justify-between mt-[10px]">
                    {
                        SpecialitiesCardDetails.map((card, index) => {
                            if(selectedSection === 1 && index < 3)
                                return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />
                            if(selectedSection === 2 && (index >= 3 && index < 6))
                                return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />
                            if(selectedSection === 3 && (index >= 6 && index < 9))
                                return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {dot1Speciality ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1Speciality(true)
                        setDot2Speciality(false)
                        setDot3Speciality(false)
                        setSelectedSection(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2Speciality ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1Speciality(false)
                        setDot2Speciality(true)
                        setDot3Speciality(false)
                        setSelectedSection(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3Speciality ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1Speciality(false)
                        setDot2Speciality(false)
                        setDot3Speciality(true)
                        setSelectedSection(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/specialities'}><div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">View All</button>
                </div></Link>
            </div>

            <hr className="md:hidden" />

            <div className="hidden lg:inline-flex flex flex-col py-[40px] px-[100px]">
                <div className="flex justify-center">
                    <div className="font-semibold bg-[#F5F6F7] text-center px-[15px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[180px]">Health Concerns</div>
                </div>
                <div className="text-[40px] text-center mt-[10px] font-medium">Common Health Concerns</div>
                <div className="flex space-x-5 mt-[40px]">
                    {
                        HealthConcernsDetails.map((card) => {
                            return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
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

            <div className="md:hidden py-[30px] px-[20px] flex flex-col items-center">
                <div className="md:hidden font-semibold text-[13px] bg-[#F5F6F7] text-center px-[12px] py-[5px] rounded-[5px] text-[#1A1C1F] w-[150px]">
                    <p>Health Concerns</p>
                </div>
                <div className=" text-[24px] text-center mt-[10px] font-medium">Common Health Concerns</div>
                <div className="flex space-x-5 mt-[10px]">
                    {
                        HealthConcernsDetails.map((card, index) => {
                            if(selectedSection2 === 1 && index < 3)
                            return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />
                            if(selectedSection2 === 2 && (index >= 3 && index < 6))
                            return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />
                            if(selectedSection2 === 3 && (index >= 6 && index < 9))
                            return <HomepageSpecialitiesCard img={card.img} tag={card.tag} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {dot1Health ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1Health(true)
                        setDot2Health(false)
                        setDot3Health(false)
                        setSelectedSection2(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot2Health ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1Health(false)
                        setDot2Health(true)
                        setDot3Health(false)
                        setSelectedSection2(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {dot3Health ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setDot1Health(false)
                        setDot2Health(false)
                        setDot3Health(true)
                        setSelectedSection2(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/hospitals'}><div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">View All</button>
                </div></Link>
            </div>
            <hr className="md:hidden" />

            <div className="hidden md:inline-flex flex-col items-center py-[40px] px-[100px] w-full">
                <div className="flex justify-center">
                    <div className="font-semibold bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[180px]">Hospital Network</div>
                </div>
                <div className="w-full text-[40px] text-center mt-[10px] flex justify-center">
                    <p className="w-[500px] font-medium">We’re Dedicated To your Well-Being, Always</p>
                </div>
                <div className="flex justify-between items-center mt-[40px] space-x-7">
                    {
                        LocationCardDetails.map((card) => {
                            return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
                <Link to={'/hospitals'}><div className="flex justify-center mt-[20px] w-full">
                    <button className="bg-[#E40443] text-center px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="md:hidden py-[30px] px-[20px] flex flex-col items-center">
                <div className="md:hidden font-semibold text-[13px] bg-[#F5F6F7]  px-[12px] py-[5px] flex justify-center rounded-[5px] text-[#1A1C1F] w-[150px]">
                    <p className="text-center">Hospital Network</p>
                </div>
                <div className="w-full text-[40px] text-center mt-[10px] flex justify-center">
                    <p className="text-[24px] font-medium">We’re Dedicated To your Well-Being, Always</p>
                </div>
                <div className="flex justify-between mt-[10px]">
                    {
                        LocationCardDetails.map((card, index) => {
                            if(index+1 === locationDotSelected)
                                return <LocationCard img={card.img} name={card.name} location={card.location} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[0px]'>
                    {locationDotSelected === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setLocationDotSelected(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {locationDotSelected === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setLocationDotSelected(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {locationDotSelected === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setLocationDotSelected(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
                <Link to={'/hospitals'}><div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">View All</button>
                </div></Link>
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px] bg-[#F4F4F4] w-full">
                <div className="flex justify-center">
                    <div className="bg-[#FFFFFF] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[140px] font-semibold">Testimonials</div>
                </div>
                <p className="text-center text-[40px] mt-[20px] font-medium">Here's What out patients</p>
                <p className="text-center text-[40px] font-medium">had said</p>

                <div className=" flex space-x-10 w-[100%] justify-between items-start mt-[30px]">
                    <iframe className=" w-[30%] h-[520px]"
                        src="https://www.youtube.com/embed/erei6SZjcck">
                    </iframe>
                    <TestimonialContainer data={Testimonials} />
                </div>
            </div>

            <div className="md:hidden py-[30px] px-[20px] bg-[#F4F4F4] flex flex-col items-center">
                <div className="font-semibold text-[13px] bg-white  px-[12px] py-[5px] flex justify-center rounded-[5px] text-[#1A1C1F] w-[110px]">
                    <p className="text-center">Testimonials</p>
                </div>
                <p className="text-center text-[24px] mt-[10px] font-medium">Here's What out patients</p>
                <p className="text-center text-[24px] font-medium">had said</p>

                <div className=" flex w-[100%] justify-center items-center mt-[10px]">
                    <iframe className=" w-[60%] h-[200px]"
                        src="https://www.youtube.com/embed/erei6SZjcck">
                    </iframe>
                </div>
                <div className="mt-[20px]">
                    {
                        Testimonials.map((data, index) => {
                            if(index+1 === selectedTestimonialDot)
                            return <TestimonialCard img={data.img} name={data.name} content={data.comment}  />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {selectedTestimonialDot === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedTestimonialDot(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedTestimonialDot === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedTestimonialDot(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedTestimonialDot === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedTestimonialDot(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div> 
            </div>

            <div className="hidden md:inline-flex flex-col items-center py-[40px] px-[100px] w-full">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[140px] font-semibold">Join Us</div>
                </div>
                <p className="text-[40px] mt-[20px] text-center font-medium">Join Our Community</p>
                <div className="items-center mt-[40px] w-full">
                    <div className="flex flex-row justify-between space-x-10">
                        <CommunityCards img="/Assets/CommunityDHA.png" name="DHA" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" />
                        <CommunityCards img="/Assets/CommunityHospital.png" name="Hospital" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" />
                        <CommunityCards img="/Assets/CommunityDoctor.png" name="Doctor" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" />
                    </div>
                    <div className="flex flex-row justify-center mt-[40px] space-x-10">
                        <CommunityCards img="/Assets/CommunityPharma.png" name="Pharma" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" />
                        <CommunityCards img="/Assets/CommunityLab.png" name="Lab" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" />
                    </div>
                </div>
            </div>

            <div className="md:hidden py-[30px] px-[20px] flex flex-col items-center">
                <div className="font-semibold text-[13px] bg-[#F5F6F7]  px-[12px] py-[5px] flex flex-col items-center rounded-[5px] text-[#1A1C1F] w-[90px]">
                    <p className="text-center">Join Us</p>
                </div>
                <p className="text-[24px] mt-[10px] text-center font-medium">Join Our Community</p>
                <div className="items-center mt-[10px]">
                    <div className="flex flex-row justify-center px-[20px]">
                        {
                            CommunityData.map((data, index) => {
                                if(selectedCommunityDot === index+1)
                                    return <CommunityCards img={data.img} name={data.name} content={data.content} />
                            })
                        }
                    </div> 
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {selectedCommunityDot === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedCommunityDot(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedCommunityDot === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedCommunityDot(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedCommunityDot === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedCommunityDot(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedCommunityDot === 4 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedCommunityDot(4)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {selectedCommunityDot === 5 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setSelectedCommunityDot(5)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px] bg-[#F4F4F4]">
                <div className="flex justify-start">
                    <div className="bg-[#FFFFFF] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[90px] font-semibold">FAQs</div>
                </div>
                <p className="text-[40px] mt-[20px] font-medium">What do you want to know?</p>
                <div className="flex items-center space-x-10">
                    <img src="/Assets/FAQimage.png" alt="doctorImage" className="w-[50%]" />
                    <div className="flex flex-col w-[50%] space-y-5">
                        {
                            FAQList.map((faq) => {
                                return <FAQContainer question={faq.question} answer={faq.answer} />
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="md:hidden py-[30px] px-[20px] bg-[#F4F4F4] flex flex-col items-center">
                <div className="font-semibold text-[13px] bg-white  px-[12px] py-[5px] flex justify-center rounded-[5px] text-[#1A1C1F] w-[80px]">
                    <p className="text-center">FAQs</p>
                </div>
                <p className="text-[24px] mt-[10px] font-medium text-center">What do you want to know?</p>
                <div className="flex items-center mt-[10px]">
                    
                    <div className="flex flex-col space-y-5">
                        {
                            FAQList.map((faq) => {
                                return <FAQContainer question={faq.question} answer={faq.answer} mobile={true} />
                            })
                        }
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;