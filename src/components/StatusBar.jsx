import img from '../assets/Status Bar.png'
const StatusBar = () => {
  return (
    <div className="w-[375px] h-[44px] flex justify-between items-center py-[12px] px-[14px] ">
      <p className="text-[#252727] font-[600] text-[15px]">9:41</p>
      <div>
        <img src={img} alt="status-bar" className="w-full" />
      </div>
    </div>
  )
}
export default StatusBar
