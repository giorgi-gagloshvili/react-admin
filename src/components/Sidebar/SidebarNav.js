import Phone from './../../assets/images/phone.png'
import Mail from './../../assets/images/mail.png'
import Twitter from './../../assets/images/twitter.png'
import Linkedin from './../../assets/images/linkedin.png'
import Radio from './../../assets/images/radio.png'
import List from './../../assets/images/lists.png'
import MenuCalendar from './../../assets/images/menucalendar.png'
import Message from './../../assets/images/message.png'
import Library from './../../assets/images/library.png'
import Chart from './../../assets/images/chart.png'
import Edu from './../../assets/images/edu.png'
import Facebook from './../../assets/images/facebook.png'
import Instagram from './../../assets/images/instagram.png'
import Youtube from './../../assets/images/youtube.png'
import Home from './../../assets/images/Home.png'


const SidebarNav = () => {
    return (
        <div className="mt-5 relative">
            <ul className="after:content-[''] after:block after:w-10 after:h-[1.4px] after:bg-[#ACB0C5] after:absolute after:left-4">
                <li className="flex h-12">
                    <a href="/" className="flex gap-4 pl-4 h-full w-full text-sm text-white bg-[#7EA4FF] items-center">
                        <span>
                            <img src={Home} alt="" />
                        </span>
                        <span>მთავარი გვერდი</span>
                    </a>
                </li>
                <li className="flex h-12">
                    <a href="/" className="flex gap-4 pl-4 h-full w-full text-sm text-[#57618D] items-center">
                        <span>
                        <img src={MenuCalendar} alt="" />
                        </span>
                        <span>ცხრილი</span>
                    </a>
                </li>
                <li className="flex h-12">
                    <a href="/" className="flex gap-4 pl-4 h-full w-full text-sm text-[#57618D] items-center">
                        <span>
                        <img src={List} alt="" />
                        </span>
                        <span>სიები</span>
                    </a>
                </li>
            </ul>
            <ul className="after:content-[''] after:block after:w-10 after:h-[1.4px] after:bg-[#ACB0C5] after:absolute after:left-4">
                <li className="flex h-12">
                    <a href="/" className="flex gap-4 pl-4 h-full w-full text-sm text-[#57618D] items-center">
                        <span>
                            <img src={Message} alt="" />
                        </span>
                        <span>შეტყობინებები</span>
                    </a>
                </li>
                <li className="flex h-12">
                    <a href="/" className="flex gap-4 pl-4 h-full w-full text-sm text-[#57618D] items-center">
                        <span>
                            <img src={Library} alt="" />
                        </span>
                        <span>ბიბლიოთეკა</span>
                    </a>
                </li>
                <li className="flex h-12">
                    <a href="/" className="flex gap-4 pl-4 h-full w-full text-sm text-[#57618D] items-center">
                        <span>
                            <img src={Edu} alt="" />
                        </span>
                        <span>სიახლეები</span>
                    </a>
                </li>
            </ul>
            <ul>
            <li className="flex h-12">
                    <a href="/" className="flex gap-4 pl-4 h-full w-full text-sm text-[#57618D] items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                                <path d="M4.56508 19.5229C4.56551 19.7932 4.64543 20.0578 4.79539 20.283L5.52973 21.3869C5.65517 21.5756 5.82532 21.7303 6.02503 21.8374C6.22474 21.9444 6.44782 22.0005 6.67441 22.0005H9.32602C9.55261 22.0005 9.77569 21.9444 9.9754 21.8374C10.1751 21.7303 10.3453 21.5756 10.4707 21.3869L11.205 20.283C11.3549 20.0578 11.4351 19.7934 11.4354 19.5229L11.4371 17.875H4.56293L4.56508 19.5229ZM0.4375 7.56254C0.4375 9.46906 1.14434 11.2084 2.30922 12.5375C3.01906 13.3474 4.12937 15.0395 4.55262 16.4669C4.55434 16.4781 4.55562 16.4893 4.55734 16.5005H11.4427C11.4444 16.4893 11.4457 16.4785 11.4474 16.4669C11.8706 15.0395 12.9809 13.3474 13.6908 12.5375C14.8557 11.2084 15.5625 9.46906 15.5625 7.56254C15.5625 3.37781 12.1641 -0.012854 7.97637 3.66342e-05C3.59312 0.0133569 0.4375 3.56515 0.4375 7.56254ZM8 4.12504C6.10465 4.12504 4.5625 5.66718 4.5625 7.56254C4.5625 7.94238 4.25484 8.25004 3.875 8.25004C3.49516 8.25004 3.1875 7.94238 3.1875 7.56254C3.1875 4.90879 5.34625 2.75004 8 2.75004C8.37984 2.75004 8.6875 3.05769 8.6875 3.43754C8.6875 3.81738 8.37984 4.12504 8 4.12504Z" fill="#57618D"/>
                            </svg>
                        </span>
                        <span>GIPA-ს შესახებ</span>
                    </a>
                </li>
                <li className="flex h-12">
                    <a href="/" className="flex gap-4 pl-4 h-full w-full text-sm text-[#57618D] items-center">
                        <span>
                            <img src={Radio} alt="" />
                        </span>
                        <span>რადიო GIPA</span>
                    </a>
                </li>
                <li className="flex h-12">
                    <a href="/" className="flex gap-4 pl-4 h-full w-full text-sm text-[#57618D] items-center">
                        <span>
                            <img src={Chart} alt="" />
                        </span>
                        <span>ტრენინგები</span>
                    </a>
                </li>
            </ul>
            <div className="fixed left-0 bottom-0 w-[232px] pl-5 pr-6">
                <div className="social-icons flex items-center justify-between pb-4 border-b-[1.4px] border-[#ACB0C5] ">
                    <a href="/">
                        <img src={Phone} alt="" />
                    </a>
                    <a href="/">
                        <img src={Mail} alt="" />
                    </a>
                    <a href="/">
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="/">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="/">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="/">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="/">
                        <img src={Youtube} alt="" />
                    </a>
                    
                </div>
                <div className="py-3 text-[#57618D] text-center px-5 text-sm">
                    &copy; 2022 - GIPA - All rights reserved
                </div>
            </div>
        </div>
    );
}
 
export default SidebarNav;