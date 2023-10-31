import {useState, useEffect} from 'react'; 

const FAQContainer = ({question, answer, mobile}) => {
    const [active, setActive] = useState(false);

    const openHandler = () => {
        setActive(!active);
    }

    return (
        <div className="w-full bg-[#FFFFFF] px-[20px] py-[10px] rounded-[10px] border-[1px] border-[#EEF0F3]">
            <div onClick = {() => openHandler()} className='flex justify-between items-center'>
                <div className={mobile ? 'text-[14px] font-medium' : 'text-[18px] font-medium'}>{question}</div>
                {
                    active ? <img src="/Assets/FAQCloseArrow.png" alt="arrow" className="w-[25px]" /> : <img src="/Assets/FAQOpenArrow.png" alt="arrow" className="w-[25px]" />
                }
            </div>
            {
                active ? (
                    <div className={mobile ? 'mt-[8px] text-[14px] text-[#5B6572]' : 'mt-[8px] text-[#5B6572]'}>
                        {answer}
                    </div>
                ) : null
            }
        </div>
    );
}

export default FAQContainer;