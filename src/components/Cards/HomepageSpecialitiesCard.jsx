import {Link} from 'react-router-dom';
const HomepageSpecialitiesCard = ({img, tag}) => {
    return (
        <>
        <div className="hidden lg:inline-flex w-[17%] min-h-[220px] flex flex-col justify-between">
            <div>
                <img src={img} alt="tagImage" className="rounded-[10px]" />
                <p className="text-[18px] text-center mt-[10px]">{tag}</p>
            </div>
            <Link to={'/#'}><p className="text-center text-[14px] text-[#E40443] underline font-semibold">Consult Now > </p></Link>
        </div>
        <div className="lg:hidden w-[30%] min-h-[170px] flex flex-col justify-between">
            <div>
                <img src={img} alt="tagImage" className="rounded-[10px]" />
                <p className="text-[13px] text-center mt-[10px]">{tag}</p>
            </div>
            <Link to={'/#'}><p className="text-center text-[12px] text-[#E40443] underline font-semibold">Consult Now > </p></Link>
        </div>
        </>
    );
}

export default HomepageSpecialitiesCard;