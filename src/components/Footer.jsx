import img1 from '../assets/Vector1.png'
import img2 from '../assets/Vector2.png'
import img3 from '../assets/Vector3.png'
import img4 from '../assets/Vector4.png'
import search from '../assets/search.png'

const Footer = () => {
  return (
    <div className="relative bg-white">
      <div className="w-[375px] h-[76px] flex mx-[29px] mt-[22px] pt-[20px]">
        <div className="mr-[38px]">
          <img src={img1} alt="icon" />
        </div>
        <div className="mr-[131px]">
          <img src={img2} alt="icon" />
        </div>
        <div className="mr-[42px]">
          <img src={img3} alt="icon" />
        </div>
        <div>
          <img src={img4} alt="icon" />
        </div>
      </div>

      <div className="absolute top-[-45px] left-[156px] cursor-pointer">
        <img src={search} alt="search" />
      </div>
    </div>
  )
}
export default Footer
