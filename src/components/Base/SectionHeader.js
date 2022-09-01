import ArrowLeft from './../../assets/images/arrow-left.png'
import ArrowRight from './../../assets/images/arrow-right.png'


const SectionHeader = () => {
    return (
        <div className='flex justify-between'>
             {/* ამ ელემენტს დიზაინში font-weight: 400 ეწერა მაგრამ ვიზუალურად აშკარად 500-ია და ამიტომ 500 ავირჩიე  */}
            <h2 className="text-[18px] leading-[21px] text-[#953849] font-firagoMedium">
                სიახლეები:
            </h2>
            <div className='flex gap-4'>
                <span className='cursor-pointer'>
                    <img src={ArrowLeft} alt="" />
                </span>
                <span className='cursor-pointer'>
                    <img src={ArrowRight} alt="" />
                </span>
            </div>
        </div>
    );
}
 
export default SectionHeader;