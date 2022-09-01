import LessonsItem from './LessonsItem'

const LessonsList = () => {
    return (
        <div className="mt-[35px] w-full">
            <div>
                <h2 className="text-[#953849] text-[18px] leading-[18px] font-firagoMedium">დღევანდელი ლექციების განრიგი:</h2>
                <p className="text-[#333] mt-1">2021-2022 გაზაფხულის სემესტრი </p>
            </div>

            <div className="mt-5">
                <ul>
                    <LessonsItem />
                    <LessonsItem />
                    <LessonsItem />
                    <LessonsItem />
                </ul>
            </div>
        </div>
    );
}
 
export default LessonsList;