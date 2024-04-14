import toggle from '../assets/Toggle.png'
const Workout = ({ img, text, time }) => {
  return (
    <div className="my-[16px] [box-shadow:-4px_8px_25px_-8px_#00000026] rounded-[12px] flex justify-between px-[16px] py-[13px]">
      <div className="flex items-center">
        <img src={img} alt="workout" />
        <div className="font-[500] ml-[9px]">
          <h5 className="text-[12px]">{text}</h5>
          <p className="text-[10px] text-[#7F7F7F]">{time}</p>
        </div>
      </div>
      <div className="flex items-center cursor-pointer">
        <img src={toggle} alt="toggle" />
      </div>
    </div>
  )
}
export default Workout
