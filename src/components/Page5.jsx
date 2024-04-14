import CustomBtn from './CustomBtn'
import GoalsColumn from './GoalsColumn'
import StatusBar from './StatusBar'

const Page5 = () => {
  return (
    <div className="w-[375px] h-[800px] rounded-[10px] bg-[#FCFCFC] mt-[30px] font-montserrat">
      <StatusBar />
      <p className="font-[600] text-[20px] mt-[24px] text-center">
        What are your goals?
      </p>
      <div className="mt-[43px] mx-[16px] mb-[134px]">
        <GoalsColumn text="Weight Loss" />
        <GoalsColumn text="Muscle Gain" />
        <GoalsColumn text="Flexibility and Mobility" />
        <GoalsColumn text="General Fitness" />
        <GoalsColumn text="Event - specific training" />
        <GoalsColumn text="Mindfulness and Mental Health" />
      </div>
      <div className="mx-[16px] mb-[85px]">
        <CustomBtn text="Confirm" />
      </div>
    </div>
  )
}
export default Page5
