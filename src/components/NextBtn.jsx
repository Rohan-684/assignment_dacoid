import img from '../assets/chevron-right-1.png'
import img1 from '../assets/Ellipse-1.png'
import img2 from '../assets/Ellipse2.png'

const NextBtn = ({ page = '' }) => {
  let next = ''
  if (page) {
    next = 'second'
  }

  return (
    <div className="mt-[98px] cursor-pointer relative">
      <div className="bg-[linear-gradient(90.95deg,_#DEE5FF_0.79%,_#809AFF_99.18%)] w-[50px] h-[50px] rounded-3xl flex items-center justify-center ml-[280px] mr-[49px]">
        <img src={img} alt="right" />
      </div>
      {next ? (
        <div className="absolute top-[-5px] left-[280px]">
          <img src={img2} alt="ellipse" />
        </div>
      ) : (
        <div className="absolute top-[-5px] left-[305px]">
          <img src={img1} alt="ellipse" />
        </div>
      )}
    </div>
  )
}
export default NextBtn
