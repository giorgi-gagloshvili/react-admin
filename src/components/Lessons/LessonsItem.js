import School from './../../assets/images/school.png'
import Bedge from './../../assets/images/bedge.png'
import Globe from './../../assets/images/globe.png'
import Clock from './../../assets/images/clock.png'
import Thing from './../../assets/images/thing.png'
import Edit from './../../assets/images/edit.png'
import Book from './../../assets/images/book.png'

const LessonsItem = () => {
    return (
        <li className='bg-white px-4 py-[6px] flex justify-between mb-3 rounded-lg shadow-item'>
                        <div className='flex gap-4'>
                            <div className='w-[46px] h-[46px] bg-[#F7F9FF] rounded-full flex items-center justify-center'>
                                <img src={School} alt="" />
                            </div>
                            <div>
                                <h3 className='font-firagoMedium text-sm leading-6'>მმართველობის სკოლა - BA</h3>
                                <p className="text-sm leading-6 text-[#333333]">თვითმმართველობის ლაბორატორია</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-6">
                            <div className=''>
                                <div className="flex gap-2 items-center">
                                    <div className="w-4 flex justify-center">
                                        <img src={Bedge} alt="" />
                                    </div>
                                    <span className="text-sm font-firagoMedium leading-6">კურსი - 2</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-4 flex justify-center">
                                        <img src={Globe} alt="" />
                                    </div>
                                    <span className="text-sm font-firagoMedium leading-6 text-[#953849]">სამართალი</span>
                                </div>
                            </div>
                            <div className=''>
                                <div className="flex gap-2 items-center">
                                    <div className="w-4 flex justify-center">
                                        <img src={Thing} alt="" />
                                    </div>
                                    <span className="text-sm font-firagoMedium leading-6">აუდიტორია - 212</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-4 flex justify-center">
                                        <img src={Clock} alt="" />
                                    </div>
                                    <span className="text-sm font-firagoMedium leading-6 text-[#953849]">10:00 - 11:00</span>
                                </div>
                            </div>
                            <div className=''>
                            <div className="flex gap-3 items-center">
                                    <div className="w-4 flex justify-center text-center">
                                        <img src={Edit} alt="" />
                                    </div>
                                    <span className="text-sm font-firagoMedium leading-6">ლექცია - 7</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-4 flex justify-center text-center">
                                        <img src={Book} alt="" />
                                    </div>
                                    <span className="text-sm font-firagoMedium leading-6 text-[#953849]">10:00 - 11:00</span>
                                </div>
                            </div>
                        </div>
                    </li>
    );
}
 
export default LessonsItem;