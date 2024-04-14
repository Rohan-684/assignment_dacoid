const GoalsColumn = ({ text }) => {
  return (
    <div className="w-full rounded-[12px] bg-[#F1F1F1] pl-[20px] pr-[14px] py-[14px] font-[600]  text-[12px] flex justify-between mb-[16px] cursor-pointer">
      <span>{text}</span>
      <div className="w-[22px] h-[22px] rounded-md border-[1px] border-[#9FB2FF]"></div>
    </div>
  )
}
export default GoalsColumn
