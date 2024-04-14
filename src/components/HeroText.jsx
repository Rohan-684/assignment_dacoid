const HeroText = ({ heading, text }) => {
  return (
    <div className="mt-[85px] mx-[16px] font-montserrat">
      <h4 className="font-[600] text-[20px] mb-[15px]">{heading}</h4>
      <p className="text-[#787878] font-[500] text-[16px]">{text}</p>
    </div>
  )
}
export default HeroText
