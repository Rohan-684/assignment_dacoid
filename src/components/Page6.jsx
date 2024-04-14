import StatusBar from './StatusBar'
import left from '../assets/chevron-left.png'
import chart from '../assets/Chart.png'
import union from '../assets/Union.png'
import alert from '../assets/alert-triangle.png'
import work1 from '../assets/workout1.png'
import work2 from '../assets/workout2.png'
import work3 from '../assets/workout3.png'

import Workout from './Workout'
import Footer from './Footer'

const Page6 = () => {
  return (
    <div className="w-[375px] h-[800px] rounded-[10px] bg-[#FCFCFC] font-montserrat">
      <StatusBar />
      <div className="mt-[24px] mx-[16px] flex justify-between mb-[80px]">
        <img src={left} alt="left-arrow" />
        <p className="font-[600] text-[20px] text-center mr-auto ml-auto">
          Workout Tracker
        </p>
      </div>
      <div className="mx-[16px] relative">
        <div className="absolute left-[130px] top-[-29px]">
          <div className="font-[400] text-[11.2px] flex ">
            <div className="flex flex-col justify-center items-center mr-[42px]">
              <p>Good job</p>
              <img src={union} alt="union" />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p>less then 320cal</p>
              <img src={union} alt="union" />
            </div>
          </div>
        </div>
        <img src={chart} alt="chart" />
      </div>

      <div className="mx-[16px] flex mt-[25px] bg-[linear-gradient(90.07deg,_rgba(129,_157,_255,_0.28)_5.94%,_rgba(16,_16,_16,_0)_76.45%)] py-[10px] pl-[9px] rounded-[10px] items-center gap-[8px]">
        <div>
          <img src={alert} alt="alert" />
        </div>

        <p className="font-[500] text-[12.57px] w-[280px]">
          You&apos;ve burned fewer calories than yesterday. Time to get moving!
        </p>
      </div>

      {/* Upcoming Workouts */}
      <div className="mt-[54px] mx-[16px]">
        <div className="flex justify-between">
          <p className="font-[600] text-[16px]">Upcoming Workout</p>
          <span className="font-[500] text-[12px] text-[#7F7F7F]">
            See more
          </span>
        </div>

        <Workout img={work1} text="Full Body Workout" time="Today 3pm" />
        <Workout img={work2} text="Upper Body Workout" time="Today 3pm" />
      </div>

      <h3 className="font-[600] text-[16px] mx-[16px]">
        What Do You Want to Train
      </h3>

      <div className="relative">
        <div className="mx-[16px] mt-[16px] w-[343px] h-[124px] rounded-[12px] bg-[#8CB1FF99] flex justify-between py-[16px] pr-[12px] pl-[16px]">
          <div className="font-[500] text-[10px]">
            <p className="text-[12px] mb-[9px]">Full Body Workout</p>
            <p className="mb-[8px]">Arms</p>
            <p>Chest</p>
          </div>
          <img src={work3} alt="workout" />
        </div>
        <div className="absolute top-[60px]">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Page6
