import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const ContactUs = (props) => {

    const [detail, setDetails] = useState({
        first: "",
        email: "",
        phone: "",
        message: ""
    })

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setDetails((prev) => {
            return {...prev, [name]: value};
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(detail);
    }

    return (
        <>
            <div className="hidden md:inline-flex flex justify-between items-center px-[100px] pt-[30px] border-b-[1px]">
                <div className="flex text-[#1A1C1F] flex-col w-[50%] relative">
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute left-[-30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[40px] absolute right-[30px]" />
                    <img src="/Assets/PinkStar.png" alt="star" className="w-[30px] absolute bottom-[-30px] right-[30px]" />
                    <div className="flex justify-start">
                        <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[140px] font-semibold">Contact Us</div>
                    </div>
                    <p className="text-[40px] leading-tight mt-[30px] font-medium">Contact for Appointments and Inquiries</p>
                    <p className="text-[#5B6572] mt-[30px]">Healing you, one step at a time. Putting your health first. Compassionate care for all types of people</p>

                </div>
                <div className="lg: w-[60%] relative">
                    <img src="/Assets/HeroImageFinal.png" className="" alt="heroImage" />
                </div>
            </div>

            <div className="relative text-[#1A1C1F] md:hidden flex flex-col  items-center px-[20px] py-[30px]">
                <div className="flex justify-center">
                    <div className="bg-[#F5F6F7] text-center px-[15px] py-[6px] rounded-[5px] text-[#1A1C1F] w-[100px] font-semibold text-[12px]">Contact Us</div>
                </div>
                <p className="text-center font-medium text-[24px] mt-[10px]">Contact for Appointments and Inquiries</p>
                <img src="/Assets/HeroImageMobile.png" alt="HeroImage" className="w-full mt-[10px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-10 top-[7%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[20%] w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-5 top-[50%] w-[30px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute left-8 top-[70%] w-[15px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-10 w-[20px]" />
                <img src="/Assets/PinkStarMobile.png" alt="star" className="absolute right-20 top-[15%] w-[20px]" />
            </div>

            <div className='py-[30px] px-[20px] lg:py-[40px] lg:px-[100px] flex flex-col lg:flex-row justify-between items-center lg:space-x-10'>
                <div className="flex items-center justify-center w-full lg:w-[70%]">
                    <div className="border-[1px] w-full border-[#E3E6E8] rounded-[10px] p-[20px] lg:p-[40px]">
                        <div className='hidden md:inline-flex w-full'>
                            <form onSubmit={submitHandler} className="w-full">
                                <p className="lg:text-[32px] font-medium">Get in touch with us</p>
                                <div className='space-y-6 mt-[20px]'>
                                    <div className="flex felx-row justify-between space-x-5">
                                        <input type="text" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="Full Name" name="first" onChange={changeHandler} required />
                                        <input type="text" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-[50%]" placeholder="Enter Phone Number" name="phone" onChange={changeHandler} required />
                                    </div>
                                    <div>
                                        <textarea placeholder="Your message" name="message" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[5px] border-[1px] border-[#EEF0F3] w-full" onChange={changeHandler} required />
                                    </div>
                                </div>
                                <button onClick={submitHandler} className="font-semibold text-[14px] rounded-[10px] px-[20px] py-[10px] text-white bg-[#E40443] mt-[10px]">Send Inquiry</button>
                            </form>
                        </div>
                        <div className='md:hidden w-full'>
                            <form onSubmit={submitHandler} className="w-full">
                                <p className="text-[18px] font-medium">Get in touch with us</p>
                                <div className='space-y-4 flex flex-col mt-[20px] w-full'>
                                        <input type="text" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[6px] text-[14px] border-[1px] border-[#EEF0F3] " placeholder="Full Name" name="first" onChange={changeHandler} required />
                                        <input type="text" className="bg-[#F4F4F4] rounded-[5px] px-[10px] py-[6px] text-[14px] border-[1px] border-[#EEF0F3]" placeholder="Enter Phone Number" name="phone" onChange={changeHandler} required />
                                        <textarea placeholder="Your message" name="message" className="bg-[#F4F4F4] text-[14px] min-h-[70px] rounded-[5px] px-[10px] py-[6px] border-[1px] border-[#EEF0F3] w-full" onChange={changeHandler} required />
                                </div>
                                <button onClick={submitHandler} className="font-semibold text-[12px] rounded-[7px] px-[20px] py-[10px] text-white bg-[#E40443] mt-[10px]">Send Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-[30%] space-y-4 lg:space-y-0 flex flex-col justify-center items-center mt-[20px] lg:mt-[0px]'>
                    <div className='space-y-2 lg:py-[30px] w-[100%] rounded-[10px] flex flex-row items-center space-x-3'>
                        <img src="/Assets/CallIconPink.png" alt="icon" className='w-[40px]' />
                        <div className='flex flex-col'>
                            <p className='text-[#5B6572] text-[12px] lg:text-[14px] font-medium'>Phone</p>
                            <p className='text-[#1A1C1F] font-medium text-[12px] lg:text-[16px]'>+1 23 456 7980</p>
                        </div>
                    </div>

                    <div className='space-y-2 lg:py-[30px] w-[100%] rounded-[10px] flex flex-row items-center space-x-3'>
                        <img src="/Assets/MailIconPink.png" alt="icon" className='w-[40px]' />
                        <div className='flex flex-col'>
                            <p className='text-[#5B6572] text-[12px] lg:text-[14px] font-medium'>Mail</p>
                            <p className='text-[#1A1C1F] font-medium text-[12px] lg:text-[16px]'>info@dooper.com</p>
                        </div>
                    </div>

                    <div className='space-y-2 lg:py-[30px] w-[100%] rounded-[10px] flex flex-row items-center space-x-3'>
                        <img src="/Assets/AddressIconPink.png" alt="icon" className='w-[40px]' />
                        <div className='flex flex-col'>
                            <p className='text-[#5B6572] text-[12px] lg:text-[14px] font-medium'>Address</p>
                            <p className='text-[#1A1C1F] font-medium text-[12px] lg:text-[16px]'>3474 Don Jackson Lane, Port Huron</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img src="/Assets/MapImage.png" alt="map" className='' />
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

            <div className="md:hidden py-[30px] px-[20px] bg-white mt-[20px]">
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

export default ContactUs;