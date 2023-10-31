const HomepageCard = ({img, tag, selectedCard, index}) => {
    return (
        <>
        <div className="hidden md:inline-flex flex flex-col border border-[#D0D4D9] rounded-[10px] w-[23%]">
            <img src={img} alt="tagImage" className="rounded-t-[10px]" />
            <p className=" text-[20px] text-center mt-[10px] font-medium">{tag}</p>
            <div className="mt-[15px] flex justify-center mb-[25px]">
                <button className="px-[10px] py-[5px] text-[#E40443] w-[120px] text-center rounded-[5px] bg-[#FCE6EC] text-[14px] font-semibold">View More</button>
            </div>
        </div>
        <div className="md:hidden border border-[#D0D4D9] rounded-[10px] w-[full]">
            <img src={img} alt="tagImage" className="rounded-t-[10px]" />
            <p className=" text-[20px] text-center mt-[10px]">{tag}</p>
            <div className="mt-[15px] flex justify-center mb-[25px]">
                <button className="px-[10px] py-[5px] text-[#E40443] w-[120px] text-center rounded-[5px] bg-[#FCE6EC] text-[14px] font-semibold">View More</button>
            </div>
        </div>
        </>
    );
}

export default HomepageCard;