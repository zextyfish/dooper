import UrgentCareCard from './Cards/UrgentCareCard';
import {useState, useEffect} from 'react';
import CommunityCards from './Cards/CommunityCard';
import WhyDooperCard from './Cards/WhyDooperCard';
import FAQContainer from './Containers/FAQContainer';
import {Link} from 'react-router-dom';

const FAQList = [
    {
        question: 'When should I go to urgent care?',
        answer: 'You should visit urgent care when you have an illness or injury that requires prompt attention but is not life-threatening. Examples include sprains, cuts, and urinary tract infections.'
    },
    {
        question: 'Can urgent care refill my medication?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'How can I schedule an appointment with a doctor?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'What kind of tests can urgent care perform with same day results?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'When should I go to urgent care vs emergency care?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'When should I see urgent care vs primary care?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        question: 'How can I pay my medical bills or inquire about billing-related issues?',
        answer: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
];


const Data = [
    {
        img: "/Assets/UrgentIcon1.png",
        heading: "General Urgent Care Visit",
    },
    {
        img: "/Assets/UrgentIcon2.png",
        heading: "Cold, Flu, Viral & Covid",
    },
    {
        img: "/Assets/UrgentIcon3.png",
        heading: "Urinary Tract Infection",
    },
    {
        img: "/Assets/UrgentIcon4.png",
        heading: "Injury, Fracture & Sprain",
    },
    {
        img: "/Assets/UrgentIcon5.png",
        heading: "Ear pain, Sinus infection",
    },
    {
        img: "/Assets/UrgentIcon6.png",
        heading: "Paediatric urgent Care",
    },
    {
        img: "/Assets/UrgentIcon4.png",
        heading: "General Urgent Care Visit",
    },
    {
        img: "/Assets/UrgentIcon3.png",
        heading: "Paediatric urgent Care",
    },
    {
        img: "/Assets/UrgentIcon2.png",
        heading: "General Urgent Care Visit",
    },
    {
        img: "/Assets/UrgentIcon1.png",
        heading: "Ear pain, Sinus infection",
    },
    {
        img: "/Assets/UrgentIcon5.png",
        heading: "Paediatric urgent Care",
    },
]
const WhyDooperData = [
    {
        img: "/Assets/ImmediateAttention.png",
        name: "Immediate Attention",
        content: "Rapid, Comprehensive urgent medical Treatment",
    },
    {
        img: "/Assets/AtHomeService.png",
        name: "At Home Service",
        content: "Immediate & accurate testing at your home ",
    },
    {
        img: "/Assets/SkilledTeam.png",
        name: "Skilled Team",
        content: "Expert and experienced healthcare professionals",
    },
    {
        img: "/Assets/CostEffective.png",
        name: "Const Effective",
        content: "Affordable services ensuring quality medical attention without breaking the bank.",
    },
    {
        img: "/Assets/AccessNetwork.png",
        name: "Access to Dooper Network",
        content: "Latest Tech-Based healthcare approach with latest facilities",
    },
    {
        img: "/Assets/24-7Service.png",
        name: "24/7 Service",
        content: "Access our urgent care services anytime within the comfort of your Home",
    },
];

const UrgentCare = (props) => {

    const [dot1, setDot1] = useState(true);
    const [dot2, setDot2] = useState(false);
    const [dot3, setDot3] = useState(false);

    const [whyDooperSelected, setWhyDooperSelected] = useState(1);

    return (
        <>
            <div className="hidden md:inline-flex flex justify-between items-center px-[100px] pt-[30px]">
                <div className="flex text-[#1A1C1F] flex-col w-[50%] relative">
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute left-[-30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[40px] absolute right-[30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute bottom-[-30px] right-[30px]" />
                    <div className="flex justify-start">
                        <div className="bg-[#F5F6F7] text-center text-[14px] px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[150px] font-semibold">Urgent Care</div>
                    </div>
                    <p className="text-[40px] leading-tight mt-[30px] font-medium">Urgent care is for non-life-threatening conditions where treatment is needed quickly</p>
                    <p className="text-[#5B6572] mt-[20px]">Dooper provides smart,hassle-free urgent care when it matters most. Available 24x7.</p>
                    <div className="flex space-x-3 items-center mt-[20px]">
                        <Link to={'/contact'}><div className="bg-[#E40443] text-center px-[6px] py-[5px] text-white rounded-[5px] w-[220px]">
                            <p className="font-semibold text-[14px]">Make An Appointment</p>
                        </div></Link>
                    </div>
                </div>
                <div className="lg: w-[60%] relative">
                    <img src="/Assets/HeroImageFinal.png" className="" alt="heroImage" />
                </div>
            </div>

            <div className="relative text-[#1A1C1F] md:hidden flex flex-col bg-white items-center px-[20px] py-[30px]">
                <div className="flex w-full justify-start">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[12px]">Urgent Care</p>
                </div>
                <p className="text-start font-medium text-[24px] mt-[10px]">Urgent care is for non-life-threatening conditions where treatment is needed quickly</p>
                <p className="text-[12px] w-full text-[#5B6572] mt-[10px]">Dooper provides smart,hassle-free urgent care when it matters most. Available 24x7.</p>
                <img src="/Assets/HeroImageMobile.png" alt="HeroImage" className="w-full mt-[10px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-10 top-[7%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[20%] w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[50%] w-[30px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-8 top-[70%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-10 w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-20 top-[15%] w-[20px]" />
                <div className="flex items-center justify-between space-x-5 mt-[20px]">
                    <Link to={'/contact'}><button className="text-white rounded-[5px] bg-[#E40443] px-[20px] py-[10px] text-[12px] font-semibold">Make an Appointment</button></Link>
                </div>
            </div>

            <div className="hidden md:inline-flex flex-col px-[100px] py-[40px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center text-[14px] px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[150px] font-semibold">Urgent Care</div>
                </div>
                <p className="text-[#1A1C1F] text-[40px] font-medium text-center mt-[20px]">Urgent Care Services</p>
                <div className="flex mt-[30px] grid grid-cols-6">
                    {
                        dot1 ? Data.map((data, idx) => {
                            if(idx < 6)
                                return <UrgentCareCard data = {data} />
                        }) : (dot2 ?
                            Data.map((data, idx) => {
                                if(idx >= 6 && idx < 12)
                                    return <UrgentCareCard data = {data} />
                            }) :
                            Data.map((data, idx) => {
                                if(idx >= 12 && idx < 18)
                                    return <UrgentCareCard data = {data} />
                            }))
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

                <div className="flex justify-center mt-[40px]">
                    <button className="bg-[#E40443] text-center text-[14px] px-[6px] py-[4px] text-white rounded-[5px] w-[120px] font-semibold">View All</button>
                </div>

                <hr className='mt-[40px] border-[1px]'/>
            </div>


            <div className="md:hidden px-[20px] py-[b0px]">
                <div className="flex w-full justify-center">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[12px]">Urgent Care</p>
                </div>
                <p className="text-[#1A1C1F] text-[24px] font-medium text-center mt-[10px]">Urgent Care Services</p>
                <div className="flex mt-[30px] grid grid-cols-3">
                    {
                        dot1 ? Data.map((data, idx) => {
                            if(idx < 3)
                                return <UrgentCareCard data = {data} />
                        }) : (dot2 ?
                            Data.map((data, idx) => {
                                if(idx >= 3 && idx < 6)
                                    return <UrgentCareCard data = {data} />
                            }) :
                            Data.map((data, idx) => {
                                if(idx >= 6 && idx < 9)
                                    return <UrgentCareCard data = {data} />
                            }))
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

                <div className="flex justify-center mt-[30px]">
                    <button className="bg-[#E40443] text-center px-[6px] py-[8px] text-white rounded-[5px] w-[120px] font-semibold text-[10px] font-semibold">View All</button>
                </div>

                <hr className='mt-[40px] border-[1px]'/>
            </div>

            <div className='hidden md:inline-flex flex flex-col px-[100px] py-[40px] items-center'>
                <p className='text-[40px] font-medium'>What you get</p>

                <div className='mt-[30px] space-x-8 flex '>
                    <div className='flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/UrgentCareImg1.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[18px] font-medium'>Urgent Treatment</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F]'>Rapid, Comprehensive urgent medical Treatment</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/UrgentCareImg2.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[18px] font-medium'>Point of care testing</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F]'>Immediate & accurate testing at your home</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/UrgentCareImg3.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[18px] font-medium'>Integrated Care</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F]'>Latest Tech-Based healthcare approach</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/UrgentCareImg4.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[18px] font-medium'>Skilled Medical Staff</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F]'>Expert and experienced healthcare professionals</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden flex flex-col px-[20px] py-[30px] items-center'>
                <p className='text-[24px] font-medium'>What you get</p>

                <div className='mt-[10px] flex grid grid-cols-2'>
                    <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/UrgentCareImg1.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[12px] font-medium'>Urgent Treatment</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[10px]'>Rapid, Comprehensive urgent medical Treatment</p>
                        </div>
                    </div>
                    <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/UrgentCareImg2.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[12px] font-medium'>Point of care testing</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[10px]'>Immediate & accurate testing at your home</p>
                        </div>
                    </div>
                    <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/UrgentCareImg3.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[12px] font-medium'>Integrated Care</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[10px]'>Latest Tech-Based healthcare approach</p>
                        </div>
                    </div>
                    <div className='mx-[10px] my-[10px] flex flex-col items-center border-[1px] border-[#D0D4D9] rounded-[10px]'>
                        <img src="/Assets/UrgentCareImg4.png" alt="img" className='rounded-t-[10px]' />
                        <div className='px-[10px] py-[10px]'>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[12px] font-medium'>Skilled Medical Staff</p>
                            <p className='mt-[10px] text-center text-[#1A1C1F] text-[10px]'>Expert and experienced healthcare professionals</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden md:inline-flex px-[100px] py-[40px] flex flex-col items-center'>
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[120px] font-semibold text-[14px]">Features</div>
                </div>
                <p className='mt-[20px] text-[40px] font-medium text-center'>Why Dooper</p>
                <div className="items-center mt-[40px]">
                    <div className="flex flex-row justify-between space-x-10">
                        <WhyDooperCard img="/Assets/ImmediateAttention.png" name="Immediate Attention" content="Rapid, Comprehensive urgent medical Treatment" />
                        <WhyDooperCard img="/Assets/AtHomeService.png" name="At Home Service" content="Immediate & accurate testing at your home" />
                        <WhyDooperCard img="/Assets/SkilledTeam.png" name="Skilled Team" content="Expert and experienced healthcare professionals" />
                    </div>
                    <div className="flex flex-row justify-between mt-[30px] space-x-10">
                        <WhyDooperCard img="/Assets/CostEffective.png" name="Cost Effective" content="Affordable services ensuring quality medical attention without breaking the bank." />
                        <WhyDooperCard img="/Assets/AccessNetwork.png" name="Access to Dooper Network" content="Latest Tech-Based healthcare approach with latest facilities" />
                        <WhyDooperCard img="/Assets/24-7Service.png" name="24/7 Service" content="Access our urgent care services anytime within the comfort of your Home" />
                    </div>
                </div>
            </div>

            <div className='md:hidden px-[20px] py-[30px] flex flex-col items-center'>
                <div className="flex w-full justify-center">
                    <p className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[110px] font-semibold text-[12px]">Features</p>
                </div>
                <p className='mt-[10px] text-[24px] font-medium text-center'>Why Dooper</p>
                <div className="items-center mt-[10px]">
                    {
                        WhyDooperData.map((data, index) => {
                            if(index + 1 == whyDooperSelected)
                                return <WhyDooperCard name={data.name} content={data.content} img={data.img} />
                        })
                    }
                </div>
                <div className='flex space-x-2 justify-center mt-[20px]'>
                    {whyDooperSelected === 1 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(1)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 2 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(2)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 3 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(3)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 4 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(4)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 5 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(5)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                    {whyDooperSelected === 6 ? <img src="/Assets/ActiveDot.png" className='w-[25px]' /> : <img onClick={() => {
                        setWhyDooperSelected(6)
                    }} src="/Assets/InactiveDot.png" className='w-[10px] h-[10px] cursor-pointer' />}
                </div>
            </div>

            <div className="hidden md:inline-flex flex-col py-[40px] px-[100px] bg-[#F4F4F4]">
                <div className="flex justify-start">
                    <div className="bg-[#FFFFFF] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[90px] font-semibold">FAQs</div>
                </div>
                <p className="text-[40px] mt-[20px] font-medium">What do you want to know about urgent care services</p>
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
                <p className="text-[24px] mt-[20px] font-medium text-center">What do you want to know about urgent care services</p>
                <div className="flex items-center mt-[20px]">
                    
                    <div className="flex flex-col space-y-5">
                        {
                            FAQList.map((faq) => {
                                return <FAQContainer question={faq.question} answer={faq.answer} mobile={true} />
                            })
                        }
                    </div>
                </div>
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

export default UrgentCare;
