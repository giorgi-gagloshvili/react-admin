import Doc from './../../assets/images/doc.png'
import Calendar from './../../assets/images/calendar.png'
import NavCalendar from './../../assets/images/nav-calendar.png'
import Bell from './../../assets/images/bell.png'
import NavMessage from './../../assets/images/nav-message.png'
import Person from './../../assets/images/person.png'
import AngleDown from './../../assets/images/angle-down.png'

const Navbar = () => {
    return (
        <div className="flex items-center pr-6">
            <div className="flex items-center gap-4 border-r pr-5 border-r-[#D6D6D6]">
                <button className="flex h-11 w-[121px] items-center justify-center gap-2 bg-[#E7526D] rounded-[10px] cursor-pointer">
                    <img src={NavCalendar} alt="" />
                    <span className="text-white text-sm">ცხრილი</span>
                </button>
                <button className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#EEF3FF] cursor-pointer">
                    <img src={Calendar} alt="" />
                </button>
                <button className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#EEF3FF] cursor-pointer">
                    <img src={Doc} alt="" />
                </button>
            </div>

            <div className="flex items-center gap-4 pl-5">
                <button className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#EEF3FF] cursor-pointer relative">
                    <img src={Bell} alt="" />
                    <span className="
                        absolute top-3 right-3 block
                        bg-[#E7526D] rounded-full w-[14px] h-[14px] 
                        text-white text-[9px] border border-white">
                            14
                    </span>
                </button>
                <button className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#EEF3FF] cursor-pointer relative">
                    <img src={NavMessage} alt="" />
                    <span className="
                        absolute top-3 right-3 block
                        bg-[#E7526D] rounded-full w-[14px] h-[14px] 
                        text-white text-[9px] border border-white">
                            14
                    </span>
                </button>
                <div className='bg-[#EEF3FF] h-[54px] flex items-center rounded-lg px-[10px] gap-[10px] cursor-pointer'>
                    <img src={Person} alt="" />
                    <span className='text-sm leading-6 text-[#333333] flex items-center gap-10'>
                        მაკა შენგელია
                        <div><img src={AngleDown} alt="" /></div>
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;