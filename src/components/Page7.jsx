import StatusBar from './StatusBar'
import left from '../assets/chevron-left.png'
import img1 from '../assets/Vector5.png'
import img2 from '../assets/Vector6.png'
import Footer from './Footer'

const Page7 = () => {
  return (
    <div className="w-[375px] h-[800px] rounded-[10px] bg-[#FCFCFC] mt-[50px] font-montserrat">
      <StatusBar />
      <div className="mt-[24px] mx-[16px] flex justify-between ">
        <img src={left} alt="left-arrow" />
        <p className="font-[600] text-[20px] text-center mr-auto ml-auto">
          Workout Schedule
        </p>
      </div>

      <div className="mt-[14px] mx-[16px] flex justify-center items-center">
        <div>
          <img src={img1} alt="vector-left" />
        </div>

        <span className="font-[600] text-[12px] mx-[14px]">Feb 2024</span>
        <div>
          <img src={img2} alt="vector-right" />
        </div>
      </div>

      <div className="flex mt-[14px] mx-[16px] gap-[7px] mb-[38px] text-[#454545]">
        <div className="px-[18px] pb-[31px] pt-[6.5px] text-center">
          <p className="font-[600] text-[11.4px] font-quicksand">
            Sun <span className="text-[28.5px]">5</span>
          </p>
        </div>
        <div className="px-[18px] pb-[31px] pt-[6.5px] text-center rounded-[10px] bg-[linear-gradient(270deg,_#8DA4FF_-0.62%,_#D1DBFF_100.68%)]">
          <p className="font-[600] text-[11.4px] font-quicksand">
            Mon <span className="text-[28.5px]">6</span>
          </p>
        </div>
        <div className="px-[18px] pb-[31px] pt-[6.5px] text-center">
          <p className="font-[600] text-[11.4px] font-quicksand">
            Tue <span className="text-[28.5px]">7</span>
          </p>
        </div>
        <div className="px-[18px] pb-[31px] pt-[6.5px] text-center">
          <p className="font-[600] text-[11.4px] font-quicksand">
            Wed <span className="text-[28.5px]">8</span>
          </p>
        </div>
        <div className="px-[18px] pb-[31px] pt-[6.5px] text-center">
          <p className="font-[600] text-[11.4px] font-quicksand">
            Thu <span className="text-[28.5px]">9</span>
          </p>
        </div>
      </div>

      <div className="font-[600] text-[12px]">
        <div>
          <p className="mb-[14px] mx-[16px]">06:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
        </div>

        <div className="relative">
          <p className="my-[14px] mx-[16px]">07:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
          <div className="absolute bg-[linear-gradient(270deg,_#D3A4F4_0%,_#E9B1E0_102.35%)] text-white left-[100px] px-[10px] py-[7px] rounded-[20px] top-[14px]">
            Ab Workout, 7:30am
          </div>
        </div>

        <div>
          <p className="my-[14px] mx-[16px]">08:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
        </div>

        <div className="relative">
          <p className="my-[14px] mx-[16px]">09:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
          <div className="absolute bg-[linear-gradient(270deg,_#D3A4F4_0%,_#E9B1E0_102.35%)] text-white left-[100px] px-[12px] py-[7px] rounded-[20px] top-[1px]">
            Upperbody Workout, 9am
          </div>
        </div>

        <div>
          <p className="my-[14px] mx-[16px]">10:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
        </div>

        <div>
          <p className="my-[14px] mx-[16px]">11:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
        </div>

        <div>
          <p className="my-[14px] mx-[16px]">12:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
        </div>

        <div>
          <p className="my-[14px] mx-[16px]">01:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
        </div>

        <div className="relative">
          <p className="my-[14px] mx-[16px]">02:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
          <div className="absolute rounded-[20px] bg-[#F1f1F1] left-[100px] top-[-9px] p-[8px]">
            Lowerbody Workout, 3pm
          </div>
        </div>

        <div>
          <p className="my-[14px] mx-[16px]">03:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
        </div>

        <div>
          <p className="my-[14px] mx-[16px]">04:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
        </div>

        <div>
          <p className="my-[14px] mx-[16px]">05:00 AM</p>
          <div className="w-full border-[0.5px] border-[#7F7F7F]"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Page7
