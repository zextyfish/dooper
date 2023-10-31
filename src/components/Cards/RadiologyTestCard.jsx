const RadiologyTestCard = ({data}) => {
    return(
        <>
        <div className="hidden md:inline-flex flex-col rounded-[8px] custom-shadow mr-[30px] mb-[30px] min-h-[400px]">
            <img src={data.img} className="w-full" alt="lab" />
            <div className="flex flex-col items-start px-[20px] py-[15px]">
                <p className="text-[#1A1C1F] text-[20px] font-semibold">{data.name}</p>
                <div className="mt-[10px] w-[100%]">
                    <p className="text-[#666666]">{data.tests} tests included</p>
                    <div className="rounded-[10px] mt-[10px] border-[1px] border-[#E40443] w-[90px] mt-[10px]">
                        <p className="text-center text-[#E40443] text-[12px] font-medium">Know more</p>
                    </div>

                    <div className="flex items-center space-x-2 mt-[20px] w-[100%]">
                        <button className="rounded-[5px] px-[6px] py-[5px] border-[1px] border-[#000000] w-[50%]"> <span className='font-semibold'>₹{data.price}</span> {data.oldPrice !== "" ? <span className='line-through text-[#B3B3B3] text-[13px]'>₹{data.oldPrice}</span> : null} {data.discount !== "" ? <span className='text-[#E40443] text-[13px]'>{data.discount}% off</span> : null } </button>
                        <button className="text-white bg-[#E40443] rounded-[5px] px-[15px] py-[5px] w-[50%]">Book Now</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="md:hidden px-[15px] py-[15px] rounded-[8px] custom-shadow mr-[10px] mb-[10px]">
            <img src={data.img} className="w-full" alt="lab" />
            <div className="flex flex-col items-start px-[5px] py-[15px]">
                <p className="text-[#1A1C1F] text-[16px] font-semibold">{data.name}</p>
                <div className="mt-[10px] w-[100%]">
                    <p className="text-[#666666] text-[10px]">{data.tests} tests included</p>
                    <div className="rounded-[10px] mt-[25px] border-[1px] border-[#E40443] w-[60px]">
                        <p className="text-center text-[#E40443] text-[8px] font-medium">Know more</p>
                    </div>

                        <div className="flex flex-col items-center mt-[15px] space-y-2 w-[100%]">
                            <button className="rounded-[5px] text-[12px] px-[6px] py-[5px] border-[1px] border-[#000000] w-[100%]"> <span className='font-semibold'>₹{data.price}</span> {data.oldPrice !== "" ? <span className='line-through text-[#B3B3B3] text-[10px]'>₹{data.oldPrice}</span> : null} {data.discount !== "" ? <span className='text-[#E40443] text-[10px]'>{data.discount}% off</span> : null } </button>
                            <button className="text-white text-[12px] bg-[#E40443] rounded-[5px] px-[15px] py-[5px] w-[100%] font-semibold">Book Now</button>
                        </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default RadiologyTestCard;