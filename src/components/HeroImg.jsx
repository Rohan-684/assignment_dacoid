const HeroImg = ({ img }) => {
  return (
    <div>
      <p className="text-[#9FB2FF] font-[500] text-[16px] underline underline-offset-[3.5px] ml-[323px] mr-[16px] cursor-pointer">
        Skip
      </p>
      <div className="mt-[68px] mx-[46px]">
        <img src={img} alt="hero-1" />
      </div>
    </div>
  )
}
export default HeroImg
