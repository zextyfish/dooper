const TestimonialCard = ({img, name, content}) => {
    return (
        <div className="rounded-[10px] border-[1px] border-[#EEF0F3] p-[10px] bg-[#FFFFFF] max-w-[350px] mr-[20px] mb-[40px]">
            <div className="border-b-[1px] p-[10px] border-b-[#EEF0F3] flex items-center">
                <img src={img} alt="userImage" className="w-[60px]" />
                <div className="ml-[15px] ">
                    <p className="text-[18px] font-medium">{name}</p>
                    <img src="/Assets/Stars.png" alt="stars" className="w-[110px] mt-[5px]" />
                </div>
            </div>
            <div className="text-[#1A1C1F] p-[10px] leading-[28.8px] text-[16px]">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default TestimonialCard;