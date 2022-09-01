import ImageOne from './../../assets/images/image-1.png'
import ImageTwo from './../../assets/images/image-2.png'
import ImageThree from './../../assets/images/image-3.png'
import ImageFour from './../../assets/images/image-4.png'
import Info from './../../assets/images/info.png'

const NewsList = () => {
    return (
        <ul className="mt-5 flex gap-[22px]">
            <li className="flex-1">
                <div>
                    <img className="w-full" src={ImageOne} alt="" />
                </div>
                <div>
                    <div className='flex gap-4 items-center mt-4'>
                        <img src={Info} alt="" />
                        <span className='font-firagoMedium'>04 მარტი, 2022</span>
                    </div>
                    <p className="text-sm text-[#333333] mt-2">EMP TALKS - ''ბუნებრივი რესურსების სახელმწიფო მართვა''</p>
                </div>
            </li>
            <li className='flex-1'>
                <div>
                    <img className="w-full" src={ImageTwo} alt="" />
                </div>
                <div>
                    <div className='flex gap-4 items-center mt-4'>
                        <img src={Info} alt="" />
                        <span className='font-firagoMedium'>04 მარტი, 2022</span>
                    </div>
                    <p className="text-sm text-[#333333] mt-2">EMP TALKS - ''ბუნებრივი რესურსების სახელმწიფო მართვა''</p>
                </div>
            </li>
            <li className="flex-1">
                <div className='w-full'>
                    <img className="w-full" src={ImageThree} alt="" />
                </div>
                <div>
                    <div className='flex gap-4 items-center mt-4'>
                        <img src={Info} alt="" />
                        <span className='font-firagoMedium'>04 მარტი, 2022</span>
                    </div>
                    <p className="text-sm text-[#333333] mt-2">EMP TALKS - ''ბუნებრივი რესურსების სახელმწიფო მართვა''</p>
                </div>
            </li>
            <li className='flex-1'>
                <div className='w-full'>
                    <img className="w-full" src={ImageFour} alt="" />
                </div>
                <div>
                    <div className='flex gap-4 items-center mt-4'>
                        <img src={Info} alt="" />
                        <span className='font-firagoMedium'>04 მარტი, 2022</span>
                    </div>
                    <p className="text-sm text-[#333333] mt-2">EMP TALKS - ''ბუნებრივი რესურსების სახელმწიფო მართვა''</p>
                </div>
            </li>
        </ul>
    );
}
 
export default NewsList;